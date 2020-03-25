import React from "react";
import ResultViewPresenter from "./ResultViewPresenter";
import MobileResultViewPresenter from "./MobileResultViewPresenter";
import { useState } from "react";
import { getUri } from "../../../Utils";

export default ({
  platform,
  type,
  globalText,
  setSelectType,
  setSelectSubType
}) => {
  const [toggle, setToggle] = useState(false);
  const [galleryToggle, setGalleryToggle] = useState(false);
  const slideViewArray = [];

  type.files.forEach((e, i) => {
    slideViewArray.push({
      url: getUri() + e.url
    });
  });

  const moreOnClick = () => setToggle(!toggle);
  return (
    <>
      {platform === "desktop" ? (
        <ResultViewPresenter
          type={type}
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
          type={type}
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
