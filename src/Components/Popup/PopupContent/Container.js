import React from "react";
import Presenter from "./Presenter";
import { useState } from "react";

export default ({ popup, closePopupNotToday }) => {
  const [cb, setCb] = useState(false);
  const [state, setState] = useState(true);
  return (
    <Presenter
      popup={popup}
      cb={cb}
      setCb={setCb}
      state={state}
      setState={setState}
      closePopupNotToday={closePopupNotToday}
    />
  );
};
