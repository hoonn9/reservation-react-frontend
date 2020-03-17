import React from "react";
import ResultPresenter from "./ResultPresenter";
import { useQuery } from "@apollo/react-hooks";
import { SEARCH_TYPE } from "../../../Routes/Reservation/ReservationQueries";
import ErrorAlert from "../../ErrorAlert";
import Loader from "../../Loader";
export default ({
  count,
  checkIn,
  checkOut,
  initState,
  globalText,
  setSelectType,
  setSelectSubType,
  resultToggle
}) => {
  const { data, loading, error } = useQuery(SEARCH_TYPE, {
    variables: {
      count,
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
          {resultToggle ? (
            data ? (
              <ResultPresenter
                searchType={data.searchType}
                globalText={globalText}
                setSelectType={setSelectType}
                setSelectSubType={setSelectSubType}
              />
            ) : (
              <ResultPresenter
                globalText={globalText}
                setSelectType={setSelectType}
                setSelectSubType={setSelectSubType}
              />
            )
          ) : null}
        </>
      )}
    </>
  );
};
