import React, { useState, useEffect } from "react";
import FreePostPresenter from "./FreePostPresenter";
import NoticePostPresenter from "./NoticePostPresenter";
import GlobalText from "../../GlobalText";
import { EditorState, convertFromRaw } from "draft-js";
export default ({ data: { seeFullPost }, type }) => {
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
    <>
      {type === "free" ? (
        <FreePostPresenter
          title={title}
          createdAt={createdAt}
          username={username}
          views={views}
          globalText={globalText}
          editorState={editorState}
        />
      ) : (
        <NoticePostPresenter
          title={title}
          createdAt={createdAt}
          username={username}
          views={views}
          globalText={globalText}
          editorState={editorState}
        />
      )}
    </>
  );
};
