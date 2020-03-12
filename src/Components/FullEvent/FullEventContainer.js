import React from "react";
import FullEventPresenter from "./FullEventPresenter";

export default ({ data }) => {
  const {
    eventType,
    thumbnail,
    title,
    period,
    subTitle,
    content,
    files
  } = data.seeFullEvent;
  return (
    <FullEventPresenter
      eventType={eventType}
      thumbnail={thumbnail}
      title={title}
      period={period}
      subTitle={subTitle}
      content={content}
      files={files}
    />
  );
};
