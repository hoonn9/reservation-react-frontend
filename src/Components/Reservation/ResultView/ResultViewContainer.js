import React from "react";
import ResultViewPresenter from "./ResultViewPresenter";
import MobileResultViewPresenter from "./MobileResultViewPresenter";
import { useState } from "react";

export default ({
  platform,
  room,
  globalText,
  setSelectType,
  setSelectSubType,
}) => {
  const [toggle, setToggle] = useState(false);
  const [galleryToggle, setGalleryToggle] = useState(false);
  const slideViewArray = [];

  room.files.forEach((e, i) => {
    slideViewArray.push({
      url: e.url,
    });
  });

  const moreOnClick = () => setToggle(!toggle);
  return (
    <>
      {platform === "desktop" ? (
        <ResultViewPresenter
          room={room}
          globalText={globalText}
          toggle={toggle}
          moreOnClick={moreOnClick}
          setSelectType={setSelectType}
          setSelectSubType={setSelectSubType}
          galleryToggle={galleryToggle}
          setGalleryToggle={setGalleryToggle}
          slideViewArray={slideViewArray}
        />
      ) : (
        <MobileResultViewPresenter
          room={room}
          globalText={globalText}
          toggle={toggle}
          moreOnClick={moreOnClick}
          setSelectType={setSelectType}
          setSelectSubType={setSelectSubType}
          galleryToggle={galleryToggle}
          setGalleryToggle={setGalleryToggle}
          slideViewArray={slideViewArray}
        />
      )}
    </>
  );
};
