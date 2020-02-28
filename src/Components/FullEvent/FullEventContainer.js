import React from "react";
import FullEventPresenter from "./FullEventPresenter";

export default ({ data }) => {
  const { type, title, period, subTitle, content, files } = data.seeFullEvent;
  return (
    <FullEventPresenter
      type={type}
      title={title}
      period={period}
      subTitle={subTitle}
      content={content}
      files={files}
    />
  );
};
