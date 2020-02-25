import React, { useState, useEffect } from "react";
import ContentPresenter from "./ContentPresenter";
import { getSize } from "../../../Utils";
export default ({ currentItem, eventArray }) => {
  const [imageSize, setImageSize] = useState(getSize().width / 3);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getSize();
      setImageSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return (
    <ContentPresenter
      imageSize={imageSize}
      eventArray={eventArray}
      currentItem={currentItem}
    />
  );
};
