import React, { useState, useEffect } from "react";
import TableViewPresenter from "./TableViewPresenter";

export default ({ view, divide, data }) => {
  const rowWidth = 100 / divide;
  const [viewState, setViewState] = useState();
  const [dataState, setDataState] = useState();

  useEffect(() => {
    if (view === "event") {
      setViewState("event");
      setDataState(data);
    }
  }, [data, view]);

  return (
    <TableViewPresenter
      rowWidth={rowWidth}
      viewState={viewState}
      dataState={dataState}
    />
  );
};
