import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const editorStyle = {
  padding: "0px 32px",
  borderRadius: "2px",
  width: "100%"
};
const mobileEditorStyle = {
  padding: "0px 16px",
  borderRadius: "2px",
  width: "100%"
};

export default ({ platform, editorState }) => {
  return (
    <Editor
      toolbarHidden
      editorState={editorState}
      readOnly={true}
      editorStyle={platform === "mobile" ? mobileEditorStyle : editorStyle}
    />
  );
};
