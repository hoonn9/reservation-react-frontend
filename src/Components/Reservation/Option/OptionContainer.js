import React from "react";
import OptionPresenter from "./OptionPresenter";

export default ({
  optionToggle,
  optionRef,
  optionNextOnClick,
  globalText,
  setCheckInTime,
  setCheckOutTime,
  setOptionRequest
}) => {
  return (
    <>
      <input
        ref={optionRef}
        style={{ width: "0px", height: "0px", border: "none" }}
      />
      {optionToggle ? (
        <OptionPresenter
          globalText={globalText}
          optionNextOnClick={optionNextOnClick}
          setCheckInTime={setCheckInTime}
          setCheckOutTime={setCheckOutTime}
          setOptionRequest={setOptionRequest}
        />
      ) : null}
    </>
  );
};
