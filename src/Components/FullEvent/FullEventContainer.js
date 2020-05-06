import React, { useState, useEffect } from "react";
import FullEventPresenter from "./FullEventPresenter";
import MobileFullEventPresenter from "./MobileFullEventPresenter";
import { EditorState, convertFromRaw } from "draft-js";
export default ({ platform, data }) => {
  const { eventType, title, period, subTitle, content, files } = data;

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    try {
      const contentRaw = convertFromRaw(JSON.parse(content));
      setEditorState(EditorState.createWithContent(contentRaw));
    } catch (e) {
      console.log(e);
    }
  }, [content]);

  return (
    <>
      {platform === "desktop" ? (
        <FullEventPresenter
          platform={platform}
          eventType={eventType}
          title={title}
          period={period}
          subTitle={subTitle}
          content={content}
          files={files}
          editorState={editorState}
        />
      ) : (
        <MobileFullEventPresenter
          platform={platform}
          eventType={eventType}
          title={title}
          period={period}
          subTitle={subTitle}
          content={content}
          files={files}
          editorState={editorState}
        />
      )}
    </>
  );
};
