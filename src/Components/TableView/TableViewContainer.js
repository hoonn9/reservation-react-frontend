import React, { useState, useEffect } from "react";
import TableViewPresenter from "./TableViewPresenter";
import EventView from "../EventView";

export default ({ view, divide, data }) => {
  const rowWidth = 100 / divide;
  const [viewState, setViewState] = useState();
  const [dataState, setDataState] = useState();
  console.log(rowWidth);

  useEffect(() => {
    if (view === "event") {
      setViewState("event");
      const { seeEvent } = data;
      setDataState(seeEvent);
    }
  }, []);

  return (
    <TableViewPresenter
      rowWidth={rowWidth}
      viewState={viewState}
      dataState={dataState}
    />
  );
};
