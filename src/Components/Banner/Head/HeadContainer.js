import React, { useEffect } from "react";
import HeadPresenter from "./HeadPresenter";

export default ({
  globalText,
  currentItem,
  setCurrentItem,
  data: { seeEvent }
}) => {
  useEffect(() => {
    setCurrentItem(seeEvent[0].eventType);
  }, [seeEvent]);
  return (
    <HeadPresenter
      globalText={globalText}
      currentItem={currentItem}
      setCurrentItem={setCurrentItem}
      seeEvent={seeEvent}
    />
  );
};
