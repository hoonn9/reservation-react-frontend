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
  const [trigger, setTrigger] = useState(true);
  const globalText = GlobalText();

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  useEffect(() => {
    if (trigger) {
      const contentRaw = convertFromRaw(JSON.parse(content));
      setEditorState(EditorState.createWithContent(contentRaw));
      setTrigger(false);
    }
  }, [trigger, content]);

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
