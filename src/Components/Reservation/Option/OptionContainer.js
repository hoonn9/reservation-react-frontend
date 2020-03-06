import React from "react";
import OptionPresenter from "./OptionPresenter";

export default ({ optionToggle, optionRef }) => {
  return (
    <>
      <input ref={optionRef} />
      {optionToggle ? <OptionPresenter /> : null}
    </>
  );
};
