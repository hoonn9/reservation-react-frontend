import React, { useState, useEffect } from "react";
import FullPostPresenter from "./FullPostPresenter";
import GlobalText from "../../GlobalText";
import { EditorState, convertFromRaw } from "draft-js";
export default ({ data: { seeFullPost } }) => {
  const {
    title,
    content,
    createdAt,
    user: { username },
    views
  } = seeFullPost;
  const globalText = GlobalText();
  const contentRaw = convertFromRaw(JSON.parse(content));
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  useEffect(() => {
    setEditorState(EditorState.createWithContent(contentRaw));
  }, []);

  return (
    <FullPostPresenter
      title={title}
      content={content}
      createdAt={createdAt}
      username={username}
      views={views}
      globalText={globalText}
      editorState={editorState}
    />
  );
};
