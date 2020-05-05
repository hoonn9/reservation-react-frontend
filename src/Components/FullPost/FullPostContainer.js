import React, { useState, useEffect } from "react";
import FreePostPresenter from "./FreePostPresenter";
import NoticePostPresenter from "./NoticePostPresenter";
import GlobalText from "../../GlobalText";
import { EditorState, convertFromRaw } from "draft-js";
export default ({ platform, data: { seeFullPost }, type }) => {
  const { title, content, createdAt, user, views } = seeFullPost;
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
          platform={platform}
          title={title}
          createdAt={createdAt}
          user={user}
          views={views}
          globalText={globalText}
          editorState={editorState}
        />
      ) : (
        <NoticePostPresenter
          platform={platform}
          title={title}
          createdAt={createdAt}
          views={views}
          globalText={globalText}
          editorState={editorState}
        />
      )}
    </>
  );
};
