import React, { useEffect } from "react";
import HeadPresenter from "./HeadPresenter";

export default ({ eventArray, setCurrentItem, data: { seeEvent } }) => {
  let eventTypes = [];
  let eventSet = [];
  useEffect(() => {
    for (const event of seeEvent) {
      eventTypes.push(event.eventType);
    }
    eventSet = [...new Set(eventTypes)];
    console.log(eventSet);
  }, [seeEvent]);
  return (
    <HeadPresenter
      eventArray={eventArray}
      setCurrentItem={setCurrentItem}
      eventSet={eventSet}
    />
  );
};
