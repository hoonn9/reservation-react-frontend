import React, { useState, useEffect, useRef } from "react";
import ReservationPresenter from "./ReservationPresenter";
import GlobalText from "../../GlobalText";
import { useLocation } from "react-router-dom";

export default ({ platform, screenSize }) => {
  const location = useLocation();
  const globalText = GlobalText();
  const [init, setInit] = useState(true);
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();
  const [typeCount, setTypeCount] = useState(1);
  const [userCount, setUserCount] = useState(1);
  const [subCount, setSubCount] = useState(0);
  const containerRef = useRef();
  useEffect(() => {
    if (location.state !== undefined) {
      setCheckIn(location.state.checkIn);
      setCheckOut(location.state.checkOut);
      setTypeCount(location.state.typeCount);
      setUserCount(location.state.userCount);
      setSubCount(location.state.subCount);
      setInit(false);
    }
  }, [location.state]);
  return (
    <div className="body-content">
      <ReservationPresenter
        platform={platform}
        init={init}
        screenSize={screenSize}
        checkIn={checkIn}
        checkOut={checkOut}
        typeCount={typeCount}
        userCount={userCount}
        subCount={subCount}
        globalText={globalText}
        containerRef={containerRef}
      />
    </div>
  );
};
