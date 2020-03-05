import React from "react";
import ResultPresenter from "./ResultPresenter";
import { useQuery } from "react-apollo-hooks";
import { SEARCH_TYPE } from "../../../Routes/Reservation/ReservationQueries";
import ErrorAlert from "../../ErrorAlert";
import Loader from "../../Loader";
export default ({ checkIn, checkOut, initState }) => {
  const { data, loading, error } = useQuery(SEARCH_TYPE, {
    variables: {
      checkIn,
      checkOut
    },
    skip: initState
  });

  return (
    <>
      {error ? (
        <ErrorAlert />
      ) : loading ? (
        <Loader />
      ) : (
        <>
          {data ? (
            <ResultPresenter searchType={data.searchType} />
          ) : (
            <ResultPresenter />
          )}
        </>
      )}
    </>
  );
};
