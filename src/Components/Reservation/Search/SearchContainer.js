import React, { useState, useEffect, useRef } from "react";
import { format } from "date-fns";
import ko from "date-fns/locale/ko";
import SearchPresenter from "./SearchPresenter";
import WidgetPresenter from "./WidgetPresenter";
import GlobalText from "../../../GlobalText";
import Result from "../Result";
import Summary from "../Summary";
import Option from "../Option";

export default ({
  type,
  init,
  checkIn,
  checkOut,
  typeCount: parentTypeCount,
  userCount: parentUserCount,
  subCount: parentSubCount,
  containerRef,
  screenSize
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
  const [selectSubType, setSelectSubType] = useState();
  const [startDay, setStartDay] = useState(
    format(startDate, "E", { locale: ko })
  );
  const [endDay, setEndDay] = useState(format(endDate, "E", { locale: ko }));

  const [smToggle, setSmToggle] = useState(false);
  const [smDisplay, setSmDisplay] = useState(false);
  const [resultToggle, setResultToggle] = useState(true);
  const [optionToggle, setOptionToggle] = useState(false);
  const optionRef = useRef();

  useEffect(() => {
    setStartDay(format(startDate, "E", { locale: ko }));
    setEndDay(format(endDate, "E", { locale: ko }));
  }, [startDate, endDate]);
  //Summary
  useEffect(() => {
    if (selectType !== undefined) {
      setSmDisplay(true);
      setSmToggle(true);
      setOptionToggle(true);
      optionRef.current.focus();
    }
  }, [selectType]);

  //페이지 진입 초기화
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
        // console.log(pageYOffset);
        // console.log(containerRef.current.offsetHeight);
        // console.log(screenSize.height);
        if (containerRef.current.offsetHeight !== null) {
          if (
            containerRef.current.offsetHeight - pageYOffset >
            screenSize.height - 200
          ) {
            setSmToggle(true);
          } else {
            setSmToggle(false);
          }
        }
      };
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
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

  const searchOnClick = () => {
    setInitState(false);
    setResultCheckIn(startDate.toISOString());
    setResultCheckOut(endDate.toISOString());
    setResultToggle(true);
  };

  const reset = () => {
    setSelectType();
    setSelectSubType();
    setSmDisplay(false);
    setResultToggle(false);
    setOptionToggle(false);
  };

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
            reset={reset}
          />
          <Result
            checkIn={resultCheckIn}
            checkOut={resultCheckOut}
            initState={initState}
            setInitState={setInitState}
            globalText={globalText}
            setSelectType={setSelectType}
            setSelectSubType={setSelectSubType}
            resultToggle={resultToggle}
          />
          <Summary
            smToggle={smToggle}
            startDate={startDate}
            endDate={endDate}
            typeCount={typeCount}
            subCount={subCount}
            userCount={userCount}
            selectType={selectType}
            selectSubType={selectSubType}
            smDisplay={smDisplay}
          />
          <Option optionRef={optionRef} optionToggle={optionToggle} />
        </>
      )}
    </>
  );
};
