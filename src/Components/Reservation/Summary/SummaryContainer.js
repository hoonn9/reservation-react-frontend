import React, { useState } from "react";
import SummaryPresenter from "./SummaryPresenter";
import MobileSummaryPresenter from "./MobileSummaryPresenter";

export default ({
  platform,
  smToggle,
  startDate,
  endDate,
  typeCount,
  subCount,
  userCount,
  selectType,
  selectSubType,
  smDisplay,
  totalPrice,
  successToggle,
  SuccessOnClick
}) => {
  const [mobileTrigger, setMobileTrigger] = useState(false);
  return (
    <>
      {selectType ? (
        platform === "desktop" ? (
          <SummaryPresenter
            smToggle={smToggle}
            startDate={startDate}
            endDate={endDate}
            typeCount={typeCount}
            subCount={subCount}
            userCount={userCount}
            selectType={selectType}
            selectSubType={selectSubType}
            smDisplay={smDisplay}
            totalPrice={totalPrice}
            successToggle={successToggle}
            SuccessOnClick={SuccessOnClick}
          />
        ) : (
          <MobileSummaryPresenter
            startDate={startDate}
            endDate={endDate}
            typeCount={typeCount}
            subCount={subCount}
            userCount={userCount}
            selectType={selectType}
            selectSubType={selectSubType}
            smDisplay={smDisplay}
            totalPrice={totalPrice}
            successToggle={successToggle}
            mobileTrigger={mobileTrigger}
            setMobileTrigger={setMobileTrigger}
            SuccessOnClick={SuccessOnClick}
          />
        )
      ) : null}
    </>
  );
};
