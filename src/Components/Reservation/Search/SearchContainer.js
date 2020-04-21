import React, { useState, useEffect, useRef } from "react";
import { format } from "date-fns";
import ko from "date-fns/locale/ko";
import SearchPresenter from "./SearchPresenter";
import Result from "../Result";
import Summary from "../Summary";
import Option from "../Option";
import Info from "../Info";
import useCheckbox from "../../../Hooks/useCheckbox";
import MobileSearchPresenter from "./MobileSearchPresenter";
import { useMutation, useLazyQuery } from "@apollo/react-hooks";
import { ME } from "../../../Routes/MyPage/MyPageQueries";
import {
  USER_RESERVE_ROOM,
  NO_USER_RESERVE_ROOM,
} from "../../../Routes/Reservation/ReservationQueries";
import useInput from "../../../Hooks/useInput";
import { useHistory } from "react-router-dom";
import { addDate } from "../../../Utils";
import { globalText } from "../../../GlobalText";
const emailRegex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^[0-9]{3}[0-9]{4}[0-9]{4}$/;

export default ({
  isLoggedIn,
  platform,
  init,
  checkIn,
  checkOut,
  typeCount: parentTypeCount,
  userCount: parentUserCount,
  subCount: parentSubCount,
  containerRef,
  screenSize,
}) => {
  //Value
  const history = useHistory();
  const [initState, setInitState] = useState(init);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDate(startDate, 1));
  const userCount = useInput(1);
  const typeCount = useInput(1);
  const subCount = useInput(0);
  const checkInTime = useInput("");
  const checkOutTime = useInput("");
  const optionRequest = useInput("");

  const reserveUserName = useInput("");
  const reserveUserSex = useInput(globalText.text_man);
  const reserveUserPhone = useInput("");
  const reserveUserEmail = useInput("");

  const guestUserName = useInput("");
  const guestUserSex = useInput(globalText.text_man);
  const guestUserPhone = useInput("");
  const guestUserEmail = useInput("");

  const agreeChecked = useCheckbox();

  //Select
  const [selectType, setSelectType] = useState({
    id: "",
    name: "",
    price: 0,
  });
  const [selectSubType, setSelectSubType] = useState({
    id: "",
    name: "",
    price: 0,
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
  const [resultToggle, setResultToggle] = useState(false);
  const [optionToggle, setOptionToggle] = useState(false);
  const [successToggle, setSuccessToggle] = useState(false);
  const [successLoading, setSuccessLoading] = useState(false);
  //Ref
  const optionRef = useRef();
  const [infoToggle, setInfoToggle] = useState(false);
  const infoRef = useRef();
  const [totalPrice, setTotalPrice] = useState(0);

  //login init
  const [me] = useLazyQuery(ME, {
    onCompleted: (data) => {
      reserveUserName.setValue(data.me.username);
      reserveUserSex.setValue(data.me.bio);
      reserveUserPhone.setValue(data.me.phoneNum);
      reserveUserEmail.setValue(data.me.email);
    },
  });

  const [userReserveMutation] = useMutation(USER_RESERVE_ROOM, {
    variables: {
      roomId: selectType.id,
      packId: selectSubType.id,
      guestUserName: guestUserName.value,
      guestUserSex: guestUserSex.value,
      guestUserPhone: guestUserPhone.value,
      guestUserEmail: guestUserEmail.value,
      count: typeCount.value,
      adult: userCount.value,
      child: subCount.value,
      needs: optionRequest.value,
      checkIn: checkInTime.value,
      checkOut: checkOutTime.value,
    },
  });

  const [noUserReserveMutation] = useMutation(NO_USER_RESERVE_ROOM, {
    variables: {
      roomId: selectType.id,
      packId: selectSubType.id,
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
      checkOut: checkOutTime.value,
    },
  });

  const dateConverter = (origin, addDate, hour, callback) => {
    const date = new Date(origin);
    date.setDate(date.getDate() + addDate);
    date.setHours(hour);
    date.setMinutes(0);
    date.setSeconds(0);
    callback(date);
  };
  // 예약자 값 초기화 Query
  useEffect(() => {
    if (isLoggedIn) {
      me();
    }
  }, [isLoggedIn, me]);

  useEffect(() => {
    setStartDay(format(startDate, "E", { locale: ko }));
    setEndDay(format(endDate, "E", { locale: ko }));

    dateConverter(startDate, 0, 15, checkInTime.setValue);
    dateConverter(endDate, 0, 8, checkOutTime.setValue);
  }, [startDate, endDate, checkInTime.setValue, checkOutTime.setValue]);

  //Summary
  useEffect(() => {
    if (selectType.id !== "" && selectType.price > 0) {
      setSmDisplay(true);
      setSmToggle(true);
      setOptionToggle(true);
      if (optionRef.current) {
        window.scrollTo({
          behavior: "smooth",
          top: optionRef.current.offsetTop,
        });
      }
      setTotalPrice(selectType.price + selectSubType.price);
    }
  }, [selectType, selectSubType]);

  //페이지 진입 초기화
  useEffect(() => {
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
      dateConverter(checkIn, 0, 0, (date) => {
        setResultCheckIn(date.toISOString());
      });
      dateConverter(checkOut, 1, 0, (date) => {
        setResultCheckOut(date.toISOString());
      });
      setResultCount(parentTypeCount);
      setResultToggle(true);
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
  }, [
    init,
    checkIn,
    checkOut,
    parentTypeCount,
    parentUserCount,
    parentSubCount,
    screenSize,
    containerRef,
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
    selectType,
  ]);

  const searchOnClick = () => {
    setInitState(false);
    dateConverter(startDate, 0, 0, (date) => {
      setResultCheckIn(date.toISOString());
    });
    dateConverter(endDate, 1, 0, (date) => {
      setResultCheckOut(date.toISOString());
    });
    setResultCount(typeCount.value);
    setResultToggle(true);
  };

  const reset = () => {
    setSelectType({
      id: "",
      name: "",
      price: 0,
    });
    setSelectSubType({
      id: "",
      name: "",
      price: 0,
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
        top: infoRef.current.offsetTop,
      });
    }
  };

  const successOnClick = async () => {
    setSuccessLoading(true);
    if (isLoggedIn) {
      try {
        const {
          data: { userReservation },
        } = await userReserveMutation();
        setSuccessLoading(false);
        history.push({
          pathname: "/check/reservation",
          state: { id: userReservation.id },
        });
      } catch (error) {
        setSuccessLoading(false);
      }
    } else {
      try {
        const {
          data: { noUserReservation },
        } = await noUserReserveMutation();
        setSuccessLoading(false);
        history.push({
          pathname: "/check/reservation",
          state: { id: noUserReservation.id },
        });
      } catch (error) {
        setSuccessLoading(false);
      }
    }
  };

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
        dateConverter={dateConverter}
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
        successOnClick={successOnClick}
        successLoading={successLoading}
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
};
