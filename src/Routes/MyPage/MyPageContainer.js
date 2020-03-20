import React from "react";
import MyPagePresenter from "./MyPagePresenter";
import { useQuery } from "@apollo/react-hooks";
import Loader from "../../Components/Loader";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorAlert from "../../Components/ErrorAlert";
import { ME } from "./MyPageQueries";
import { MypageRouter } from "../../Components/Routes";

export default () => {
  const { data, loading, error, refetch } = useQuery(ME);

  return (
    <div className="body-content">
      {error ? (
        <ErrorAlert />
      ) : loading ? (
        <Loader />
      ) : (
        <Router basename="/mypage">
          <>
            <MyPagePresenter data={data} />
            <MypageRouter data={data} refetch={refetch} />
          </>
        </Router>
      )}
    </div>
  );
};
