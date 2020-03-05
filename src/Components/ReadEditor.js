import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default ({ editorState }) => {
  return <Editor toolbarHidden editorState={editorState} readOnly={true} />;
};
