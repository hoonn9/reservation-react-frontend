import React from "react";
import OptionPresenter from "./OptionPresenter";
import Title from "../../Title";
import MobileOptionPresenter from "./MobileOptionPresenter";
import { globalText } from "../../../GlobalText";

export default ({
  platform,
  optionToggle,
  optionRef,
  optionNextOnClick,
  setCheckInTime,
  setCheckOutTime,
  optionRequest,
  startDate,
  endDate
}) => {
  const checkInOnChange = e => {
    const date = new Date(startDate);
    date.setHours(e.target.value);
    date.setMinutes(0);
    date.setSeconds(0);
    setCheckInTime(date);
  };

  const checkOutOnChange = e => {
    const date = new Date(endDate);
    date.setHours(e.target.value);
    date.setMinutes(0);
    date.setSeconds(0);
    setCheckOutTime(date);
  };

  const RefStyle = { width: "0px", height: "0px", border: "none" };
  return (
    <>
      <span ref={optionRef} style={RefStyle} />
      {optionToggle ? (
        <>
          <Title platform={platform} text={globalText.text_option} />
          {platform === "desktop" ? (
            <OptionPresenter
              optionNextOnClick={optionNextOnClick}
              checkInOnChange={checkInOnChange}
              checkOutOnChange={checkOutOnChange}
              optionRequest={optionRequest}
            />
          ) : (
            <MobileOptionPresenter
              optionNextOnClick={optionNextOnClick}
              checkInOnChange={checkInOnChange}
              checkOutOnChange={checkOutOnChange}
              optionRequest={optionRequest}
            />
          )}
        </>
      ) : null}
    </>
  );
};
