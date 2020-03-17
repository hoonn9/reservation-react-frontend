import React, { useEffect } from "react";
import ContentPresenter from "./ContentPresenter";
export default ({
  screenSize,
  currentItem,
  wrapperWidth,
  imgWidth,
  setImgWidth,
  transValue,
  setTransValue,
  divide,
  data: { seeEvent }
}) => {
  useEffect(() => {
    setImgWidth(((screenSize.width / 100) * wrapperWidth) / divide);
  }, [screenSize, wrapperWidth, divide, setImgWidth]);

  const currentArray = seeEvent.filter(e => {
    return e.eventType === currentItem;
  });

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
};
