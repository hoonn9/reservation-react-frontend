import React, { useEffect, useState } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import styled from "styled-components";
import Editor from "../../Components/Editor";
import { UPLOAD_BOARD } from "./UploadQueries";
import { useMutation } from "react-apollo-hooks";
import useInput from "../../Hooks/useInput";
import Input from "../../Components/Input";
import GlobalText from "../../GlobalText";

const Wrapper = styled.div`
  margin-top: 120px;
  padding: 32px;
`;
const TitleWrapper = styled.div`
  margin-bottom: 16px;
`;

const Title = styled(Input)`
  display: inline-block;
  width: 50%;
`;

const TitleLabel = styled.div`
  display: inline-block;
  margin-right: 32px;
  font-size: 15px;
  font-weight: 500;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px;
`;
const Button = styled.button`
  padding: 8px;
`;

export default () => {
  const globalText = GlobalText();
  const uploadTitle = useInput("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [imageArray] = useState([]);
  const [uploadMutation] = useMutation(UPLOAD_BOARD);

  const handleLeavePage = e => {
    e.preventDefault();
    console.log("벗어남");
    e.returnValue("정말 벗어나시겠습니까?");
    return "정말 벗어나시겠습니까?";
  };
  useEffect(() => {
    console.log("체크");
    window.addEventListener("beforeunload", handleLeavePage);
    window.onbeforeunload = handleLeavePage;
  }, []);

  const handlePost = async () => {
    const postJson = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    try {
      const data = await uploadMutation({
        variables: {
          type: "free",
          title: uploadTitle.value,
          content: postJson,
          files: [...imageArray]
        }
      });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
    const testRaw = convertFromRaw(JSON.parse(postJson));
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <TitleLabel>{globalText.text_board_header_title}</TitleLabel>
        <Title
          value={uploadTitle.value}
          onChange={uploadTitle.onChange}
          placeholder={globalText.text_write_title_placeholder}
        />
      </TitleWrapper>
      <Editor
        handlePost={handlePost}
        editorState={editorState}
        setEditorState={setEditorState}
        imageArray={imageArray}
      />
      <ButtonWrapper>
        <Button onClick={handlePost}>{globalText.text_regist}</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
