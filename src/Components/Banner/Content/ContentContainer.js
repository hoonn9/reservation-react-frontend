import React, { useState, useEffect } from "react";
import ContentPresenter from "./ContentPresenter";
import { getSize } from "../../../Utils";
export default ({ screenSize, currentItem, data: { seeEvent } }) => {
  const divide = 3;
  const [wrapperWidth, setWrapperWidth] = useState(75);
  const [imgWidth, setImgWidth] = useState(
    ((screenSize.width / 100) * wrapperWidth) / divide
  );

  useEffect(() => {
    setImgWidth(((screenSize.width / 100) * wrapperWidth) / divide);
  }, [screenSize, wrapperWidth]);

  return (
    <ContentPresenter
      imgWidth={imgWidth}
      currentItem={currentItem}
      seeEvent={seeEvent}
      wrapperWidth={wrapperWidth}
    />
  );
};
