import React from "react";
import HeadPresenter from "./HeadPresenter";

export default ({ eventArray, setCurrentItem }) => {
  return (
    <HeadPresenter eventArray={eventArray} setCurrentItem={setCurrentItem} />
  );
};
