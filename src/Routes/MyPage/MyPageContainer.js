import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Loader from "../../Components/Loader";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorAlert from "../../Components/ErrorAlert";
import { ME } from "./MyPageQueries";
import { MyPageRouter } from "../../Components/Routes";
import MyPagePresenter from "./MyPagePresenter";
import MobileMyPagePresenter from "./MobileMyPagePresenter";
import GlobalText from "../../GlobalText";
import { LOG_OUT } from "../../SharedQueries";
import MyPageMenu from "./MyPageMenu";

export default ({ platform, screenSize, isLoggedIn }) => {
  const { data, loading, error, refetch } = useQuery(ME);
  const globalText = GlobalText();
  const [logoutMutation] = useMutation(LOG_OUT);
  return (
    <div className="body-content">
      {error ? (
        <ErrorAlert />
      ) : loading ? (
        <Loader />
      ) : (
        <Router basename="/mypage">
          <>
            {platform === "desktop" ? (
              <MyPagePresenter
                data={data}
                globalText={globalText}
                logoutMutation={logoutMutation}
              />
            ) : (
              <MobileMyPagePresenter
                data={data}
                globalText={globalText}
                logoutMutation={logoutMutation}
              />
            )}
            <MyPageMenu platform={platform} />
            <MyPageRouter
              data={data}
              refetch={refetch}
              platform={platform}
              screenSize={screenSize}
              isLoggedIn={isLoggedIn}
            />
          </>
        </Router>
      )}
    </div>
  );
};
