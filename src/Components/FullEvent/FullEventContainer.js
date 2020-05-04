import React from "react";
import FullEventPresenter from "./FullEventPresenter";
import MobileFullEventPresenter from "./MobileFullEventPresenter";
export default ({ platform, data }) => {
  const { eventType, title, period, subTitle, content, files } = data;
  return (
    <>
      {platform === "desktop" ? (
        <FullEventPresenter
          eventType={eventType}
          title={title}
          period={period}
          subTitle={subTitle}
          content={content}
          files={files}
        />
      ) : (
        <MobileFullEventPresenter
          eventType={eventType}
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
