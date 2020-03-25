import React, { useState, useEffect, useRef } from "react";
import { format } from "date-fns";
import ko from "date-fns/locale/ko";
import SearchPresenter from "./SearchPresenter";
import WidgetPresenter from "./WidgetPresenter";
import GlobalText from "../../../GlobalText";
import Result from "../Result";
import Summary from "../Summary";
import Option from "../Option";
import Info from "../Info";
import useCheckbox from "../../../Hooks/useCheckbox";
import MobileWidgetPresenter from "./MobileWidgetPresenter";
import MobileSearchPresenter from "./MobileSearchPresenter";
const emailRegex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^[0-9]{3}[0-9]{4}[0-9]{4}$/;

export default ({
  platform,
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

  //Value
  const [initState, setInitState] = useState(init);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [userCount, setUserCount] = useState(1);
  const [typeCount, setTypeCount] = useState(1);
  const [subCount, setSubCount] = useState(0);
  const [checkInTime, setCheckInTime] = useState("15:00");
  const [checkOutTime, setCheckOutTime] = useState("08:00");
  const [optionRequest, setOptionRequest] = useState("");
  const [reserveUserName, setReserveUserName] = useState("");
  const [reserveUserSex, setReserveUserSex] = useState("남");
  const [reserveUserPhone, setReserveUserPhone] = useState("");
  const [reserveUserPhoneError, setReserveUserPhoneError] = useState("");
  const [reserveUserEmail, setReserveUserEmail] = useState("");
  const [reserveUserEmailError, setReserveUserEmailError] = useState("");

  const [guestUserName, setGuestUserName] = useState("");
  const [guestUserSex, setGuestUserSex] = useState("남");
  const [guestUserPhone, setGuestUserPhone] = useState("");
  const [guestUserPhoneError, setGuestUserPhoneError] = useState("");
  const [guestUserEmail, setGuestUserEmail] = useState("");
  const [guestUserEmailError, setGuestUserEmailError] = useState("");

  const agreeChecked = useCheckbox();

  //Select
  const [selectType, setSelectType] = useState();
  const [selectSubType, setSelectSubType] = useState();

  //Result Value
  const [resultCount, setResultCount] = useState();
  const [resultCheckIn, setResultCheckIn] = useState();
  const [resultCheckOut, setResultCheckOut] = useState();

  const [startDay, setStartDay] = useState(
    format(startDate, "E", { locale: ko })
  );
  const [endDay, setEndDay] = useState(format(endDate, "E", { locale: ko }));

  //Toggle
  const [smToggle, setSmToggle] = useState(false);
  const [smDisplay, setSmDisplay] = useState(false);
  const [resultToggle, setResultToggle] = useState(true);
  const [optionToggle, setOptionToggle] = useState(false);
  const [successToggle, setSuccessToggle] = useState(false);

  //Ref
  const optionRef = useRef();
  const [infoToggle, setInfoToggle] = useState(false);
  const infoRef = useRef();
  const [totalPrice, setTotalPrice] = useState(0);

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
      setTotalPrice(selectType.price + selectSubType.price);
    }
  }, [selectType, selectSubType]);

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
        setResultCount(parentTypeCount);
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
    type,
    screenSize,
    containerRef
  ]);

  useEffect(() => {
    if (
      emailRegex.test(reserveUserEmail) &&
      emailRegex.test(guestUserEmail) &&
      phoneRegex.test(reserveUserPhone) &&
      phoneRegex.test(guestUserPhone)
    ) {
      if (
        reserveUserName !== "" &&
        reserveUserSex !== "" &&
        reserveUserPhone !== "" &&
        reserveUserEmail !== "" &&
        guestUserName !== "" &&
        guestUserSex !== "" &&
        guestUserPhone !== "" &&
        guestUserEmail !== "" &&
        agreeChecked.checked &&
        selectType !== ""
      ) {
        setSuccessToggle(true);
      } else {
        setSuccessToggle(false);
      }
    } else {
      setSuccessToggle(false);
    }
  }, [
    reserveUserName,
    reserveUserSex,
    reserveUserPhone,
    reserveUserEmail,
    guestUserName,
    guestUserSex,
    guestUserPhone,
    guestUserEmail,
    agreeChecked,
    selectType
  ]);

  const searchOnClick = () => {
    setInitState(false);
    setResultCheckIn(startDate.toISOString());
    setResultCheckOut(endDate.toISOString());
    setResultCount(typeCount);
    setResultToggle(true);
  };

  const reset = () => {
    setSelectType();
    setSelectSubType();
    setSmDisplay(false);
    setResultToggle(false);
    setOptionToggle(false);
    setInfoToggle(false);
  };

  const optionNextOnClick = () => {
    setInfoToggle(true);
    console.log(checkInTime);
    console.log(checkOutTime);
    console.log(optionRequest);
  };
  return (
    <>
      {type === "widget" ? (
        platform === "desktop" ? (
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
          <MobileWidgetPresenter
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
        )
      ) : platform === "desktop" ? (
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
            platform={platform}
            count={resultCount}
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
            platform={platform}
            smToggle={smToggle}
            startDate={startDate}
            endDate={endDate}
            typeCount={typeCount}
            subCount={subCount}
            userCount={userCount}
            selectType={selectType}
            selectSubType={selectSubType}
            smDisplay={smDisplay}
            totalPrice={totalPrice}
            successToggle={successToggle}
          />
          <Option
            platform={platform}
            globalText={globalText}
            optionRef={optionRef}
            optionToggle={optionToggle}
            optionNextOnClick={optionNextOnClick}
            setCheckInTime={setCheckInTime}
            setCheckOutTime={setCheckOutTime}
            setOptionRequest={setOptionRequest}
          />
          <Info
            platform={platform}
            globalText={globalText}
            infoRef={infoRef}
            infoToggle={infoToggle}
            agreeChecked={agreeChecked}
            setReserveUserName={setReserveUserName}
            setReserveUserSex={setReserveUserSex}
            setReserveUserPhone={setReserveUserPhone}
            setReserveUserEmail={setReserveUserEmail}
            setGuestUserName={setGuestUserName}
            setGuestUserSex={setGuestUserSex}
            setGuestUserPhone={setGuestUserPhone}
            setGuestUserEmail={setGuestUserEmail}
            reserveUserPhoneError={reserveUserPhoneError}
            reserveUserEmailError={reserveUserEmailError}
            guestUserPhoneError={guestUserPhoneError}
            guestUserEmailError={guestUserEmailError}
            setReserveUserPhoneError={setReserveUserPhoneError}
            setReserveUserEmailError={setReserveUserEmailError}
            setGuestUserPhoneError={setGuestUserPhoneError}
            setGuestUserEmailError={setGuestUserEmailError}
          />
        </>
      ) : (
        <>
          <MobileSearchPresenter
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
            platform={platform}
            count={resultCount}
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
            platform={platform}
            smToggle={smToggle}
            startDate={startDate}
            endDate={endDate}
            typeCount={typeCount}
            subCount={subCount}
            userCount={userCount}
            selectType={selectType}
            selectSubType={selectSubType}
            smDisplay={smDisplay}
            totalPrice={totalPrice}
            successToggle={successToggle}
          />
          <Option
            platform={platform}
            globalText={globalText}
            optionRef={optionRef}
            optionToggle={optionToggle}
            optionNextOnClick={optionNextOnClick}
            setCheckInTime={setCheckInTime}
            setCheckOutTime={setCheckOutTime}
            setOptionRequest={setOptionRequest}
          />
          <Info
            platform={platform}
            globalText={globalText}
            infoRef={infoRef}
            infoToggle={infoToggle}
            agreeChecked={agreeChecked}
            setReserveUserName={setReserveUserName}
            setReserveUserSex={setReserveUserSex}
            setReserveUserPhone={setReserveUserPhone}
            setReserveUserEmail={setReserveUserEmail}
            setGuestUserName={setGuestUserName}
            setGuestUserSex={setGuestUserSex}
            setGuestUserPhone={setGuestUserPhone}
            setGuestUserEmail={setGuestUserEmail}
            reserveUserPhoneError={reserveUserPhoneError}
            reserveUserEmailError={reserveUserEmailError}
            guestUserPhoneError={guestUserPhoneError}
            guestUserEmailError={guestUserEmailError}
            setReserveUserPhoneError={setReserveUserPhoneError}
            setReserveUserEmailError={setReserveUserEmailError}
            setGuestUserPhoneError={setGuestUserPhoneError}
            setGuestUserEmailError={setGuestUserEmailError}
          />
        </>
      )}
    </>
  );
};
