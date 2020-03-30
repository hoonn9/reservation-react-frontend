import React, { useState, useEffect, useRef } from "react";
import { format } from "date-fns";
import ko from "date-fns/locale/ko";
import SearchPresenter from "./SearchPresenter";
import WidgetPresenter from "./WidgetPresenter";
import Result from "../Result";
import Summary from "../Summary";
import Option from "../Option";
import Info from "../Info";
import useCheckbox from "../../../Hooks/useCheckbox";
import MobileWidgetPresenter from "./MobileWidgetPresenter";
import MobileSearchPresenter from "./MobileSearchPresenter";
import { useMutation } from "@apollo/react-hooks";
import {
  USER_RESERVE_TYPE,
  NO_USER_RESERVE_TYPE
} from "../../../Routes/Reservation/ReservationQueries";
import useInput from "../../../Hooks/useInput";
const emailRegex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^[0-9]{3}[0-9]{4}[0-9]{4}$/;

export default ({
  isLoggedIn,
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
  //Value
  const [initState, setInitState] = useState(init);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const userCount = useInput(1);
  const typeCount = useInput(1);
  const subCount = useInput(0);
  const checkInTime = useInput("");
  const checkOutTime = useInput("");
  const optionRequest = useInput("테스트 요청");

  const reserveUserName = useInput("김태훈");
  const reserveUserSex = useInput("남");
  const reserveUserPhone = useInput("01047059935");
  const reserveUserEmail = useInput("xognstltl@naver.com");

  const guestUserName = useInput("김태훈");
  const guestUserSex = useInput("남");
  const guestUserPhone = useInput("01047059935");
  const guestUserEmail = useInput("xognstltl@naver.com");

  const agreeChecked = useCheckbox();

  //Select
  const [selectType, setSelectType] = useState({
    id: "",
    name: "",
    price: 0
  });
  const [selectSubType, setSelectSubType] = useState({
    id: "",
    name: "",
    price: 0
  });
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
  const [infoToggle, setInfoToggle] = useState(true);
  const infoRef = useRef();
  const [totalPrice, setTotalPrice] = useState(0);

  const [userReserveMutation] = useMutation(USER_RESERVE_TYPE, {
    variables: {
      typeId: selectType.id,
      subTypeId: selectSubType.id,
      guestUserName: guestUserName.value,
      guestUserSex: guestUserSex.value,
      guestUserPhone: guestUserPhone.value,
      guestUserEmail: guestUserEmail.value,
      count: typeCount.value,
      adult: userCount.value,
      child: subCount.value,
      needs: optionRequest.value,
      checkIn: checkInTime.value,
      checkOut: checkOutTime.value
    }
  });

  const [noUserReserveMutation] = useMutation(NO_USER_RESERVE_TYPE, {
    variables: {
      typeId: selectType.id,
      subTypeId: selectSubType.id,
      reserveUserName: reserveUserName.value,
      reserveUserSex: reserveUserSex.value,
      reserveUserPhone: reserveUserPhone.value,
      reserveUserEmail: reserveUserEmail.value,
      guestUserName: guestUserName.value,
      guestUserSex: guestUserSex.value,
      guestUserPhone: guestUserPhone.value,
      guestUserEmail: guestUserEmail.value,
      count: typeCount.value,
      adult: userCount.value,
      child: subCount.value,
      needs: optionRequest.value,
      checkIn: checkInTime.value,
      checkOut: checkOutTime.value
    }
  });

  const dateConverter = (origin, hour, callback) => {
    const date = new Date(origin);
    date.setHours(hour);
    date.setMinutes(0);
    date.setSeconds(0);
    callback(date);
  };
  useEffect(() => {
    setStartDay(format(startDate, "E", { locale: ko }));
    setEndDay(format(endDate, "E", { locale: ko }));

    dateConverter(startDate, 15, checkInTime.setValue);
    dateConverter(endDate, 8, checkOutTime.setValue);
  }, [startDate, endDate]);

  //Summary
  useEffect(() => {
    if (selectType.id !== "" && selectType.price > 0) {
      setSmDisplay(true);
      setSmToggle(true);
      setOptionToggle(true);
      if (optionRef.current) {
        window.scrollTo({
          behavior: "smooth",
          top: optionRef.current.offsetTop
        });
      }
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
        setInitState(false);
        typeCount.setValue(parentTypeCount);
        userCount.setValue(parentUserCount);
        subCount.setValue(parentSubCount);
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
      emailRegex.test(reserveUserEmail.value) &&
      emailRegex.test(guestUserEmail.value) &&
      phoneRegex.test(reserveUserPhone.value) &&
      phoneRegex.test(guestUserPhone.value)
    ) {
      if (
        reserveUserName.value !== "" &&
        reserveUserSex.value !== "" &&
        reserveUserPhone.value !== "" &&
        reserveUserEmail.value !== "" &&
        guestUserName.value !== "" &&
        guestUserSex.value !== "" &&
        guestUserPhone.value !== "" &&
        guestUserEmail.value !== "" &&
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
    setResultCount(typeCount.value);
    setResultToggle(true);
  };

  const reset = () => {
    setSelectType({
      id: "",
      name: "",
      price: 0
    });
    setSelectSubType({
      id: "",
      name: "",
      price: 0
    });
    setSmDisplay(false);
    setResultToggle(false);
    setOptionToggle(false);
    setInfoToggle(false);
  };

  const optionNextOnClick = () => {
    setInfoToggle(true);
    if (infoRef.current) {
      window.scrollTo({
        behavior: "smooth",
        top: infoRef.current.offsetTop
      });
    }
  };

  const SuccessOnClick = async () => {
    if (isLoggedIn) {
      try {
        const {
          data: { userReservation }
        } = await userReserveMutation();
        console.log(userReservation);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const {
          data: { noUserReservation }
        } = await noUserReserveMutation();
        console.log(noUserReservation);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (type === "widget") {
    return platform === "desktop" ? (
      <WidgetPresenter
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        startDay={startDay}
        endDay={endDay}
        userCount={userCount}
        typeCount={typeCount}
        subCount={subCount}
      />
    ) : (
      <MobileWidgetPresenter
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        startDay={startDay}
        endDay={endDay}
        userCount={userCount}
        typeCount={typeCount}
        subCount={subCount}
      />
    );
  } else {
    return (
      <>
        {platform === "desktop" ? (
          <SearchPresenter
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            startDay={startDay}
            endDay={endDay}
            userCount={userCount}
            typeCount={typeCount}
            subCount={subCount}
            searchOnClick={searchOnClick}
            selectType={selectType}
            containerRef={containerRef}
            reset={reset}
          />
        ) : (
          <MobileSearchPresenter
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            startDay={startDay}
            endDay={endDay}
            userCount={userCount}
            typeCount={typeCount}
            subCount={subCount}
            searchOnClick={searchOnClick}
            selectType={selectType}
            containerRef={containerRef}
            reset={reset}
          />
        )}
        <Result
          platform={platform}
          count={resultCount}
          checkIn={resultCheckIn}
          checkOut={resultCheckOut}
          initState={initState}
          setInitState={setInitState}
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
          SuccessOnClick={SuccessOnClick}
        />
        <Option
          platform={platform}
          startDate={startDate}
          endDate={endDate}
          optionRef={optionRef}
          optionToggle={optionToggle}
          optionNextOnClick={optionNextOnClick}
          setCheckInTime={checkInTime.setValue}
          setCheckOutTime={checkOutTime.setValue}
          optionRequest={optionRequest}
        />
        <Info
          platform={platform}
          isLoggedIn={isLoggedIn}
          infoRef={infoRef}
          infoToggle={infoToggle}
          agreeChecked={agreeChecked}
          reserveUserName={reserveUserName}
          reserveUserSex={reserveUserSex}
          reserveUserPhone={reserveUserPhone}
          reserveUserEmail={reserveUserEmail}
          guestUserName={guestUserName}
          guestUserSex={guestUserSex}
          guestUserPhone={guestUserPhone}
          guestUserEmail={guestUserEmail}
        />
      </>
    );
  }
};
