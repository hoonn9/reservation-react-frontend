import PropTypes from "prop-types";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../Routes/Home";
import Login from "../Routes/Login";
import Join from "../Routes/Join";
import JoinAgree from "../Routes/JoinAgree";
import MyPage from "../Routes/MyPage";
import Upload from "../Routes/Upload/Upload";
import Board from "../Routes/Board";
import Post from "../Routes/Post/Post";
import Event from "../Routes/Event";
import FullEvent from "../Routes/FullEvent/FullEvent";
import About from "../Routes/About";
import Reservation from "../Routes/Reservation";
import Infomation from "../Routes/Infomation";
import Notice from "../Routes/Notice";
import FindID from "../Routes/Help/FindID";
import FindPW from "../Routes/Help/FindPW";
import MyPageAccount from "../Routes/MyPage/Routes/MyPageAccount";
import MyPageChange from "../Routes/MyPage/Routes/MyPageChange";
const LoggedOutRoutes = ({ platform, screenSize }) => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => <Home platform={platform} screenSize={screenSize} />}
    />
    <Route
      path="/mypage"
      render={props => <Login platform={platform} screenSize={screenSize} />}
    />
    <Route
      path="/login"
      render={props => <Login platform={platform} screenSize={screenSize} />}
    />
    <Route
      path="/joinagree"
      render={props => <JoinAgree platform={platform} />}
    />
    <Route path="/join" render={props => <Join platform={platform} />} />
    <Route path="/board/:id" render={props => <Board platform={platform} />} />
    <Route
      path="/upload"
      render={props => <Login platform={platform} screenSize={screenSize} />}
    />
    <Route path="/post/:id" render={props => <Post platform={platform} />} />
    <Route
      exact
      path="/notice"
      render={props => <Notice platform={platform} />}
    />
    <Route path="/notice/:id" render={props => <Post platform={platform} />} />
    <Route
      exact
      path="/event"
      render={props => <Event platform={platform} />}
    />
    <Route
      path="/event/:id"
      render={props => <FullEvent platform={platform} />}
    />
    <Route path="/about" component={About} />
    <Route
      path="/infomation"
      render={props => <Infomation platform={platform} />}
    />
    <Route
      path="/help/findid"
      render={props => <FindID platform={platform} />}
    />
    <Route
      path="/help/findpw"
      render={props => <FindPW platform={platform} />}
    />
    <Route
      path="/reservation"
      render={props => (
        <Reservation platform={platform} screenSize={screenSize} />
      )}
    />
    <Redirect from="*" to="/" />
  </Switch>
);

const LoggedInRoutes = ({ platform, screenSize }) => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => <Home platform={platform} screenSize={screenSize} />}
    />
    <Route
      path="/mypage"
      render={props => <MyPage platform={platform} screenSize={screenSize} />}
    />
    <Route
      path="/upload"
      render={props => <Upload platform={platform} screenSize={screenSize} />}
    />
    <Route path="/board/:id" render={props => <Board platform={platform} />} />
    <Route path="/post/:id" render={props => <Post platform={platform} />} />
    <Route
      exact
      path="/notice"
      render={props => <Notice platform={platform} />}
    />
    <Route path="/notice/:id" render={props => <Post platform={platform} />} />
    <Route
      exact
      path="/event"
      render={props => <Event platform={platform} />}
    />
    <Route
      path="/event/:id"
      render={props => <FullEvent platform={platform} />}
    />
    <Route path="/about" component={About} />
    <Route
      path="/infomation"
      render={props => <Infomation platform={platform} />}
    />
    <Route
      path="/reservation"
      render={props => (
        <Reservation platform={platform} screenSize={screenSize} />
      )}
    />
    <Redirect from="*" to="/" />
  </Switch>
);

const AppRouter = ({ isLoggedIn, platform, screenSize }) => {
  return (
    <Switch>
      {isLoggedIn ? (
        <LoggedInRoutes platform={platform} screenSize={screenSize} />
      ) : (
        <LoggedOutRoutes platform={platform} screenSize={screenSize} />
      )}
    </Switch>
  );
};

export const MyPageRouter = ({ data, refetch, platform }) => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={props => <MyPageAccount platform={platform} data={data} />}
      />
      <Route
        path="/change"
        render={props => <MyPageChange platform={platform} data={data} />}
      />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;
