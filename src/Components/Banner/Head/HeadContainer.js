import React, { useEffect } from "react";
import HeadPresenter from "./HeadPresenter";

export default ({ eventArray, setCurrentItem, data: { seeEvent } }) => {
  return (
    <HeadPresenter
      eventArray={eventArray}
      setCurrentItem={setCurrentItem}
      seeEvent={seeEvent}
    />
  );
};
