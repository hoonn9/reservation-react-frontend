import React from "react";
import OptionPresenter from "./OptionPresenter";

export default ({ optionToggle, optionRef, optionNextOnClick }) => {
  return (
    <>
      <input
        ref={optionRef}
        style={{ width: "0px", height: "0px", border: "none" }}
      />
      {optionToggle ? (
        <OptionPresenter optionNextOnClick={optionNextOnClick} />
      ) : null}
    </>
  );
};
