import React, { useEffect, useState } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import styled from "styled-components";
import Editor from "../../Components/Editor";
import { UPLOAD_BOARD } from "./UploadQueries";
import { useMutation } from "react-apollo-hooks";

const Wrapper = styled.div``;
const EditorWrapper = styled.div`
  display: block;
  width: 100%;
  height: 80%;
  border: ${props => props.theme.boxBorder};
`;
const Button = styled.button``;

export default () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [testState, setTestState] = useState(EditorState.createEmpty());
  const [imageArray, setImageArray] = useState([]);
  const [uploadMutation] = useMutation(UPLOAD_BOARD);
  const handlePost = async () => {
    const testJson = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    console.log(imageArray);
    try {
      const data = await uploadMutation({
        variables: {
          type: "free",
          title: "testTitle",
          content: testJson,
          files: [...imageArray]
        }
      });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
    console.log(editorState);
    console.log(testJson);
    const testRaw = convertFromRaw(JSON.parse(testJson));
    console.log(testRaw);
    setTestState(EditorState.createWithContent(testRaw));
    //console.log(testState);
  };

  return (
    <>
      <Editor
        handlePost={handlePost}
        editorState={editorState}
        setEditorState={setEditorState}
        testState={testState}
        setTestState={setTestState}
        imageArray={imageArray}
      />
      <Button onClick={handlePost}>등록</Button>
    </>
  );
};
