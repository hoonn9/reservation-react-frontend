import React from "react";
import SearchPresenter from "./SearchPresenter";
import WidgetPresenter from "./WidgetPresenter";
import { useState, useEffect } from "react";
import GlobalText from "../../../GlobalText";
import ko from "date-fns/locale/ko";
import { format } from "date-fns";
import Result from "../Result";

export default ({
  type,
  init,
  checkIn,
  checkOut,
  typeCount: parentTypeCount,
  userCount: parentUserCount,
  subCount: parentSubCount
}) => {
  const globalText = GlobalText();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [userCount, setUserCount] = useState(1);
  const [typeCount, setTypeCount] = useState(1);
  const [subCount, setSubCount] = useState(0);
  const [initState, setInitState] = useState(init);
  const [resultCheckIn, setResultCheckIn] = useState();
  const [resultCheckOut, setResultCheckOut] = useState();

  const [startDay, setStartDay] = useState(
    format(startDate, "E", { locale: ko })
  );
  const [endDay, setEndDay] = useState(format(endDate, "E", { locale: ko }));

  useEffect(() => {
    setStartDay(format(startDate, "E", { locale: ko }));
    setEndDay(format(endDate, "E", { locale: ko }));
  }, [startDate, endDate]);

  const searchOnClick = () => {
    setInitState(false);
    setResultCheckIn(startDate.toISOString());
    setResultCheckOut(endDate.toISOString());
  };

  useEffect(() => {
    if (type !== "widget") {
      if (
        checkIn !== undefined &&
        checkOut !== undefined &&
        parentTypeCount !== undefined &&
        parentUserCount !== undefined &&
        parentSubCount !== undefined
      ) {
        setStartDate(new Date(checkIn));
        setEndDate(new Date(checkOut));
        setTypeCount(parentTypeCount);
        setUserCount(parentUserCount);
        setSubCount(parentSubCount);
        setInitState(false);
        setResultCheckIn(checkIn);
        setResultCheckOut(checkOut);
      }
    }
  }, [
    init,
    checkIn,
    checkOut,
    parentTypeCount,
    parentUserCount,
    parentSubCount,
    type
  ]);

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
        <>
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
            searchOnClick={searchOnClick}
          />
          <Result
            checkIn={resultCheckIn}
            checkOut={resultCheckOut}
            initState={initState}
            setInitState={setInitState}
          />
        </>
      )}
    </>
  );
};
