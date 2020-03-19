import React from "react";
import MyPagePresenter from "./MyPagePresenter";
import { useQuery } from "@apollo/react-hooks";
import Loader from "../../Components/Loader";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import ErrorAlert from "../../Components/ErrorAlert";
import { ME } from "./MyPageQueries";
import { MypageRouter } from "../../Components/Routes";
import { useEffect } from "react";

export default () => {
  let history = useHistory();
  const { data, loading, error } = useQuery(ME);
  useEffect(() => {}, []);
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
            <MypageRouter />
          </>
        </Router>
      )}
    </div>
  );
};
