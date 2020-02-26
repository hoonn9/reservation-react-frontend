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
const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/mypage" component={Login} />
    <Route path="/login" component={Login} />
    <Route path="/joinagree" component={JoinAgree} />
    <Route path="/join" component={Join} />
    <Route path="/board/:id" component={Board} />
    <Route path="/upload" component={Login} />
    <Route path="/post/:id" component={Detail} />
    <Redirect from="*" to="/" />
  </Switch>
);

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/mypage" component={MyPage} />
    <Route path="/upload" component={Upload} />
    <Route path="/board" component={Board} />
    <Route path="/post/:id" component={Detail} />
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
