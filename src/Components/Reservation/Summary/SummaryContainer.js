import React from "react";
import SummaryPresenter from "./SummaryPresenter";

export default ({
  smToggle,
  startDate,
  endDate,
  typeCount,
  subCount,
  userCount,
  selectType,
  selectSubType,
  smDisplay,
  totalPrice
}) => {
  return (
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
    />
  );
};
