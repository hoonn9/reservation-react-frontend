import React from "react";
import FullEventPresenter from "./FullEventPresenter";
import MobileFullEventPresenter from "./MobileFullEventPresenter";

export default ({ platform, data }) => {
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
    <>
      {platform === "desktop" ? (
        <FullEventPresenter
          eventType={eventType}
          thumbnail={thumbnail}
          title={title}
          period={period}
          subTitle={subTitle}
          content={content}
          files={files}
        />
      ) : (
        <MobileFullEventPresenter
          eventType={eventType}
          thumbnail={thumbnail}
          title={title}
          period={period}
          subTitle={subTitle}
          content={content}
          files={files}
        />
      )}
    </>
  );
};
