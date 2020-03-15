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
import Detail from "../Routes/Post/Detail/Detail";
import Event from "../Routes/Event";
import FullEvent from "../Routes/FullEvent/FullEvent";
import About from "../Routes/About";
import Reservation from "../Routes/Reservation";
import Infomation from "../Routes/Infomation";
const LoggedOutRoutes = ({ platform, screenSize }) => (
  <Switch onChange={() => toTop()}>
    <Route
      exact
      path="/"
      render={props => <Home platform={platform} screenSize={screenSize} />}
    />
    <Route path="/mypage" component={Login} />
    <Route path="/login" component={Login} />
    <Route path="/joinagree" component={JoinAgree} />
    <Route path="/join" component={Join} />
    <Route path="/board/:id" component={Board} />
    <Route path="/upload" component={Login} />
    <Route path="/post/:id" component={Detail} />
    <Route exact path="/event" component={Event} />
    <Route path="/event/:id" component={FullEvent} />
    <Route path="/about" component={About} />
    <Route path="/infomation" component={Infomation} />
    <Route
      path="/reservation"
      render={props => <Reservation screenSize={screenSize} />}
    />
    <Redirect from="*" to="/" />
  </Switch>
);

const LoggedInRoutes = ({ platform, screenSize }) => (
  <Switch onChange={() => toTop()}>
    <Route
      exact
      path="/"
      render={props => <Home platform={platform} screenSize={screenSize} />}
    />
    <Route path="/mypage" component={MyPage} />
    <Route path="/upload" component={Upload} />
    <Route path="/board" component={Board} />
    <Route path="/post/:id" component={Detail} />
    <Route exact path="/event" component={Event} />
    <Route path="/event/:id" component={FullEvent} />
    <Route path="/about" component={About} />
    <Route path="/infomation" component={Infomation} />
    <Route
      path="/reservation"
      render={props => <Reservation screenSize={screenSize} />}
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

const toTop = () => {
  console.log("check");
  window.scrollTo(0, 0);
};

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;
