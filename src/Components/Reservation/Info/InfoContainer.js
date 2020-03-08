import React from "react";
import InfoPresenter from "./InfoPresenter";

export default ({ infoToggle, infoRef }) => {
  return (
    <>
      <input
        ref={infoRef}
        style={{ width: "0px", height: "0px", border: "none" }}
      />
      {infoToggle ? <InfoPresenter infoToggle={infoToggle} /> : null}
    </>
  );
};
