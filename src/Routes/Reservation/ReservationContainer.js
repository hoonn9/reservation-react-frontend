import React from "react";
import ReservationPresenter from "./ReservationPresenter";
import { useQuery } from "react-apollo-hooks";
import { SEARCH_TYPE } from "./ReservationQueries";
import ErrorAlert from "../../Components/ErrorAlert";
import Loader from "../../Components/Loader";
import GlobalText from "../../GlobalText";

export default ({ location }) => {
  console.log(location);
  const globalText = GlobalText();
  if (location.state !== undefined) {
    const {
      state: { checkIn, checkOut }
    } = location;
    const { data, loading, error } = useQuery(SEARCH_TYPE, {
      variables: {
        checkIn,
        checkOut
      }
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
  } else {
    return (
      <div className="body-content">
        <ReservationPresenter />
      </div>
    );
  }
};
