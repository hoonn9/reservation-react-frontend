import React from "react";
import ReservationCheckPresenter from "./ReservationCheckPresenter";
import { useLocation, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { CHECK_RESERVATION } from "../Reservation/ReservationQueries";
import ErrorAlert from "../../Components/ErrorAlert";
import Loader from "../../Components/Loader";

export default ({ platform }) => {
  const history = useHistory();
  const location = useLocation();
  let reservationId = null;
  try {
    reservationId = location.state.id;
  } catch (error) {
    history.push("/");
  }

  const { data, loading, error } = useQuery(CHECK_RESERVATION, {
    variables: { reservationId },
  });
  return (
    <div className="body-content">
      {error ? (
        <ErrorAlert />
      ) : loading ? (
        <Loader />
      ) : (
        <ReservationCheckPresenter platform={platform} data={data} />
      )}
    </div>
  );
};
