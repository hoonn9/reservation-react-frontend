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
  successToggle
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
          />
        )
      ) : null}
    </>
  );
};
