import React from "react";
import MyPagePresenter from "./MyPagePresenter";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import Loader from "../../Components/Loader";
import ErrorAlert from "../../Components/ErrorAlert";

const ME = gql`
  query {
    me {
      username
    }
  }
`;

export default () => {
  const { data, loading, error } = useQuery(ME);
  return (
    <div className="body-content">
      {error ? (
        <ErrorAlert />
      ) : loading ? (
        <Loader />
      ) : (
        <MyPagePresenter data={data} />
      )}
    </div>
  );
};
