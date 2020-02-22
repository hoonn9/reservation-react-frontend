import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  EditorState,
  Modifier,
  draftToHtml,
  convertToRaw,
  convertFromRaw
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";

const Wrapper = styled.div``;
const EditorWrapper = styled.div`
  display: block;
  width: 100%;
  height: 80%;
  border: ${props => props.theme.boxBorder};
`;

export default ({
  editorState,
  setEditorState,
  testState,
  setTestState,
  imageArray
}) => {
  const uploadCallback = file => {
    const formData = new FormData();
    formData.append("file", file);

    return new Promise((resolve, reject) => {
      axios
        .post("http://localhost:4000/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => {
          resolve({ data: { link: res.data.location } });
          imageArray.push(res.data.location);
        })
        .catch(e => {
          console.log(e);
          reject(e.toString());
        });
    });
  };

  return (
    <Wrapper>
      <EditorWrapper>
        <Editor
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          toolbar={{
            image: {
              urlEnabled: true,
              uploadEnabled: true,
              uploadCallback: uploadCallback,
              previewImage: true
            }
          }}
          editorState={editorState}
          onEditorStateChange={editorState => setEditorState(editorState)}
          localization={{
            locale: "ko"
          }}
        />
      </EditorWrapper>
      <EditorWrapper>
        <Editor toolbarHidden editorState={testState} readOnly={true} />
      </EditorWrapper>
    </Wrapper>
  );
};
