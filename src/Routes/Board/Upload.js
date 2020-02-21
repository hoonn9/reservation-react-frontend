import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EditorState, Modifier, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Wrapper = styled.div``;
const EditorWrapper = styled.div`
  display: block;
  width: 80%;
  height: 80%;
  border: ${props => props.theme.boxBorder};
`;
const Button = styled.button``;

export default () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const editStateChange = e => {
    //const data = draftToHtml(convertToRaw(e.getCurrentContent()));
    console.log(e);
    setEditorState(e);
  };

  const handlePost = () => {
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  useEffect(() => {});
  return (
    <Wrapper>
      <EditorWrapper>
        <Editor
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          editorState={editorState}
          onEditorStateChange={editorState => setEditorState(editorState)}
          localization={{
            locale: "ko"
          }}
        />
      </EditorWrapper>

      <Button onClick={handlePost}>등록</Button>
    </Wrapper>
  );
};
