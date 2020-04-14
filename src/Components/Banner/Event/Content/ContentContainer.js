import React, { useEffect } from "react";
import ContentPresenter from "./ContentPresenter";
import TouchSlideView from "../../../TouchSlideView";

export default ({
  platform,
  screenSize,
  currentItem,
  wrapperWidth,
  imgWidth,
  setImgWidth,
  transValue,
  setTransValue,
  divide,
  data: { seeEvent },
}) => {
  useEffect(() => {
    setImgWidth(((screenSize.width / 100) * wrapperWidth) / divide);
  }, [screenSize, wrapperWidth, divide, setImgWidth]);

  const currentArray = seeEvent.filter((e) => {
    return e.eventType === currentItem;
  });

  if (platform === "desktop") {
    return (
      <ContentPresenter
        divide={divide}
        imgWidth={imgWidth}
        currentArray={currentArray}
        wrapperWidth={wrapperWidth}
        transValue={transValue}
        setTransValue={setTransValue}
      />
    );
  } else {
    const viewArray = [];
    currentArray.forEach((e) => {
      viewArray.push({
        to: `/event/${e.id}`,
        id: e.id,
        title: e.title,
        subTitle: e.subTitle,
        url: e.thumbnail,
      });
    });

    return <TouchSlideView data={viewArray} type="banner" />;
  }
};
