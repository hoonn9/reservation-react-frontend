import PropTypes from "prop-types";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../Routes/Home";
import Login from "../Routes/Login";
import Join from "../Routes/Join";
import JoinAgree from "../Routes/JoinAgree";
import MyPage from "../Routes/MyPage";
import Upload from "../Routes/Board/Upload";

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/mypage" component={Login} />
    <Route path="/login" component={Login} />
    <Route path="/joinagree" component={JoinAgree} />
    <Route path="/join" component={Join} />
    <Redirect from="*" to="/" />
  </Switch>
);

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/mypage" component={MyPage} />
    <Route path="/upload" component={Upload} />
    <Redirect from="*" to="/" />
  </Switch>
);

const AppRouter = ({ isLoggedIn }) => (
  <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
);

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;
