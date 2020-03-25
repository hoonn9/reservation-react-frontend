import React from "react";
import OptionPresenter from "./OptionPresenter";
import Title from "../../Title";
import MobileOptionPresenter from "./MobileOptionPresenter";

export default ({
  platform,
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
        <>
          <Title platform={platform} text={globalText.text_option} />
          {platform === "desktop" ? (
            <OptionPresenter
              globalText={globalText}
              optionNextOnClick={optionNextOnClick}
              setCheckInTime={setCheckInTime}
              setCheckOutTime={setCheckOutTime}
              setOptionRequest={setOptionRequest}
            />
          ) : (
            <MobileOptionPresenter
              globalText={globalText}
              optionNextOnClick={optionNextOnClick}
              setCheckInTime={setCheckInTime}
              setCheckOutTime={setCheckOutTime}
              setOptionRequest={setOptionRequest}
            />
          )}
        </>
      ) : null}
    </>
  );
};
