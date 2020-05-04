import React, { useState, useEffect } from "react";
import EventPresenter from "./EventPresenter";
import { useQuery } from "@apollo/react-hooks";
import { SEE_EVENT, SEE_EVENT_COUNT } from "./EventQueries";
import ErrorAlert from "../../Components/ErrorAlert";
import Loader from "../../Components/Loader";
import { EventPage } from "../../Components/Page";

export default ({ platform }) => {
  const pageSize = 9;
  const rangeSize = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const [currentRange, setCurrentRange] = useState(0);
  const [loading, setLoading] = useState(true);

  const countQuery = useQuery(SEE_EVENT_COUNT, {
    variables: {},
    fetchPolicy: "cache-and-network",
  });

  const pageQuery = EventPage({
    first: pageSize,
    skip: currentPage * pageSize,
  });

  useEffect(() => {
    if (
      !countQuery.loading &&
      countQuery.data &&
      !pageQuery.loading &&
      pageQuery.data
    ) {
      setLoading(false);
    }

    if (countQuery.loading || pageQuery.loading) {
      setLoading(true);
    }
  }, [countQuery.loading, countQuery.data, pageQuery.loading, pageQuery.data]);

  return (
    <div className="body-content">
      {loading ? (
        <Loader />
      ) : (
        <EventPresenter
          platform={platform}
          data={pageQuery.data.seeEvent}
          currentRange={currentRange}
          setCurrentRange={setCurrentRange}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageSize={pageSize}
          rangeSize={rangeSize}
          listCount={countQuery.data.seeEventCount}
        />
      )}
    </div>
  );
};
