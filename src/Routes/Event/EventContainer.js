import React from "react";
import EventPresenter from "./EventPresenter";
import { useQuery } from "@apollo/react-hooks";
import { SEE_EVENT } from "./EventQueries";
import ErrorAlert from "../../Components/ErrorAlert";
import Loader from "../../Components/Loader";
import GlobalText from "../../GlobalText";

export default ({ platform }) => {
  const globalText = GlobalText();
  const { data, loading, error } = useQuery(SEE_EVENT, {
    variables: {}
  });
  return (
    <div className="body-content">
      {error ? (
        ErrorAlert
      ) : loading ? (
        <Loader />
      ) : (
        <EventPresenter
          platform={platform}
          data={data}
          globalText={globalText}
        />
      )}
    </div>
  );
};
