import React from "react";
import ResultViewPresenter from "./ResultViewPresenter";
import { useState } from "react";
import { getUri } from "../../../Utils";

export default ({ type, globalText, setSelectType, setSelectSubType }) => {
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
  );
};
