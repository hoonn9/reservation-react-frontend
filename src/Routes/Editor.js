import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EditorState, Modifier, draftToHtml, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const Wrapper = styled.div``;
const EditorWrapper = styled.div`
  display: block;
  width: 80%;
  height: 80%;
  border: ${props => props.theme.boxBorder};
`;
class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = editorState => this.setState({ editorState });
  }
  render() {
    return (
      <Wrapper>
        <EditorWrapper>
          <Editor
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            onChange={editStateChange}
            localization={{
              locale: "ko"
            }}
          />
        </EditorWrapper>
        <textarea
          value={draftToHtml(convertToRaw(this.editorState.getCurrentContent))}
        ></textarea>
        <Button onClick={handlePost}>등록</Button>
      </Wrapper>
    );
  }
}

export default Editor;
