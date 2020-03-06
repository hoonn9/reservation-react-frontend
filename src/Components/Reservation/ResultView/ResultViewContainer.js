import React from "react";
import ResultViewPresenter from "./ResultViewPresenter";
import { useState } from "react";

export default ({ type, globalText, setSelectType, setSelectSubType }) => {
  const [toggle, setToggle] = useState(false);
  const moreOnClick = () => setToggle(!toggle);
  return (
    <ResultViewPresenter
      type={type}
      globalText={globalText}
      toggle={toggle}
      moreOnClick={moreOnClick}
      setSelectType={setSelectType}
      setSelectSubType={setSelectSubType}
    />
  );
};
