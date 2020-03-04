import React from "react";
import SearchPresenter from "./SearchPresenter";
import WidgetPresenter from "./WidgetPresenter";
import { useState } from "react";
import GlobalText from "../../../GlobalText";
import { useEffect } from "react";
import ko from "date-fns/locale/ko";
import { format } from "date-fns";

export default ({ type }) => {
  const globalText = GlobalText();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [userCount, setUserCount] = useState(1);
  const [typeCount, setTypeCount] = useState(1);
  const [subCount, setSubCount] = useState(0);
  const [startDay, setStartDay] = useState(
    format(startDate, "E", { locale: ko })
  );
  const [endDay, setEndDay] = useState(format(endDate, "E", { locale: ko }));

  useEffect(() => {
    setStartDay(format(startDate, "E", { locale: ko }));
    setEndDay(format(endDate, "E", { locale: ko }));
  }, [startDate, endDate]);

  return (
    <>
      {type === "widget" ? (
        <WidgetPresenter
          startDate={startDate}
          setStartDate={setStartDate}
          startDay={startDay}
          endDate={endDate}
          endDay={endDay}
          setEndDate={setEndDate}
          globalText={globalText}
          userCount={userCount}
          setUserCount={setUserCount}
          typeCount={typeCount}
          setTypeCount={setTypeCount}
          subCount={subCount}
          setSubCount={setSubCount}
        />
      ) : (
        <SearchPresenter
          startDate={startDate}
          setStartDate={setStartDate}
          startDay={startDay}
          endDate={endDate}
          endDay={endDay}
          setEndDate={setEndDate}
          globalText={globalText}
          userCount={userCount}
          setUserCount={setUserCount}
          typeCount={typeCount}
          setTypeCount={setTypeCount}
          subCount={subCount}
          setSubCount={setSubCount}
        />
      )}
    </>
  );
};
