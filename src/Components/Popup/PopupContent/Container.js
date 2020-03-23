import React from "react";
import Presenter from "./Presenter";
import { useState } from "react";

export default ({ platform, popup, closePopupNotToday, closeCounter }) => {
  const [cb, setCb] = useState(false);
  const [state, setState] = useState(true);

  return (
    <Presenter
      platform={platform}
      popup={popup}
      cb={cb}
      setCb={setCb}
      state={state}
      setState={setState}
      closePopupNotToday={closePopupNotToday}
      closeCounter={closeCounter}
    />
  );
};
