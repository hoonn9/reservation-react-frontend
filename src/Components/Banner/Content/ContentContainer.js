import React, { useState, useEffect } from "react";
import ContentPresenter from "./ContentPresenter";
import { getSize } from "../../../Utils";
export default ({ currentItem, data: { seeEvent } }) => {
  const [divide, setDivide] = useState(100 / 3);

  return (
    <ContentPresenter
      divide={divide}
      currentItem={currentItem}
      seeEvent={seeEvent}
    />
  );
};
