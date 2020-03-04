import React, { useState, useEffect } from "react";
import ReservationPresenter from "./ReservationPresenter";
import { useQuery } from "react-apollo-hooks";
import { SEARCH_TYPE } from "./ReservationQueries";
import ErrorAlert from "../../Components/ErrorAlert";
import Loader from "../../Components/Loader";
import GlobalText from "../../GlobalText";

export default ({ location }) => {
  console.log(location);
  const globalText = GlobalText();
  const [init, setInit] = useState(true);
  const [checkIn, setCheckIn] = useState(new Date().toISOString());
  const [checkOut, setCheckOut] = useState(new Date().toISOString());
  const [typeCount, setTypeCount] = useState(1);
  const [userCount, setUserCount] = useState(1);
  const [subCount, setSubCount] = useState(0);

  useEffect(() => {
    if (location.state !== undefined) {
      setCheckIn(location.state.checkIn);
      setCheckOut(location.state.checkOut);
      setInit(false);
    }
  }, []);

  console.log(checkIn, checkOut);
  const { data, loading, error } = useQuery(SEARCH_TYPE, {
    variables: {
      checkIn,
      checkOut
    },
    skip: init
  });

  return (
    <div className="body-content">
      {error ? (
        <ErrorAlert text={globalText.text_network_error} />
      ) : loading ? (
        <Loader />
      ) : (
        <ReservationPresenter
          data={data}
          checkIn={checkIn}
          checkOut={checkOut}
        />
      )}
    </div>
  );
};
