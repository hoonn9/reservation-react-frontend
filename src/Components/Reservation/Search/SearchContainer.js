import React, { useRef } from "react";
import SearchPresenter from "./SearchPresenter";
import WidgetPresenter from "./WidgetPresenter";
import { useState, useEffect } from "react";
import GlobalText from "../../../GlobalText";
import ko from "date-fns/locale/ko";
import { format } from "date-fns";
import Result from "../Result";
import Summary from "../Summary";

export default ({
  type,
  init,
  checkIn,
  checkOut,
  typeCount: parentTypeCount,
  userCount: parentUserCount,
  subCount: parentSubCount,
  containerRef
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
  const [selectType, setSelectType] = useState();

  const [startDay, setStartDay] = useState(
    format(startDate, "E", { locale: ko })
  );
  const [endDay, setEndDay] = useState(format(endDate, "E", { locale: ko }));

  const [smToggle, setSmToggle] = useState(false);

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
      const handleScroll = () => {
        const { pageYOffset } = window;
        if (pageYOffset + 670 > containerRef.current.offsetHeight - 110) {
          setSmToggle(false);
        } else {
          setSmToggle(true);
        }
      };
      handleScroll();
      window.addEventListener("scroll", handleScroll);
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
            selectType={selectType}
            containerRef={containerRef}
          />
          <Result
            checkIn={resultCheckIn}
            checkOut={resultCheckOut}
            initState={initState}
            setInitState={setInitState}
            globalText={globalText}
            setSelectType={setSelectType}
          />
          <Summary
            smToggle={smToggle}
            startDate={startDate}
            endDate={endDate}
            typeCount={typeCount}
            subCount={subCount}
            userCount={userCount}
            selectType={selectType}
          />
        </>
      )}
    </>
  );
};
