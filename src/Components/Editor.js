import React from "react";
import styled from "styled-components";
import { Editor } from "react-draft-wysiwyg";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";

const Wrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  border: ${props => props.theme.boxBorder};
`;
const editorStyle = {
  padding: "0px 32px",
  borderRadius: "2px",
  height: "480px",
  width: "100%"
};
const mobileEditorStyle = {
  padding: "0px 16px",
  borderRadius: "2px",
  height: "300px",
  width: "100%"
};
export default ({ platform, editorState, setEditorState, imageArray }) => {
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

  console.log(platform);
  return (
    <Wrapper>
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
        editorStyle={platform === "mobile" ? mobileEditorStyle : editorStyle}
        editorState={editorState}
        onEditorStateChange={editorState => setEditorState(editorState)}
        localization={{
          locale: "ko"
        }}
      />
    </Wrapper>
  );
};
