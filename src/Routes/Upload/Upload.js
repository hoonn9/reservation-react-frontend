import React, { useEffect, useState } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import styled from "styled-components";
import Editor from "../../Components/Editor";
import { UPLOAD_BOARD } from "./UploadQueries";
import { useMutation } from "react-apollo-hooks";

const Button = styled.button``;

export default () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [testState, setTestState] = useState(EditorState.createEmpty());
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
