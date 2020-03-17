import React, { useEffect } from "react";
import HeadPresenter from "./HeadPresenter";

export default ({
  globalText,
  currentItem,
  setCurrentItem,
  resetWrapper,
  data: { seeEvent }
}) => {
  useEffect(() => {
    setCurrentItem(seeEvent[0].eventType);
  }, [seeEvent, setCurrentItem]);
  return (
    <HeadPresenter
      globalText={globalText}
      currentItem={currentItem}
      resetWrapper={resetWrapper}
      setCurrentItem={setCurrentItem}
      seeEvent={seeEvent}
    />
  );
};
