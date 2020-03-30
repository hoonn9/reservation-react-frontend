import React, { useState, useEffect } from "react";
import loadable from "@loadable/component";
import { useLocation } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { LOG_OUT } from "../SharedQueries";
//import DesktopHeader from "./Header/DesktopHeader";
//import MobileHeader from "./Header/MoblieHeader";
import { gql } from "apollo-boost";
import { getWithExpiry, setWithExpiry } from "../Utils";
import { categoryArray } from "./Categories";
import { globalText } from "../GlobalText";

const USERNAME = gql`
  query {
    me {
      username
    }
  }
`;

const DesktopHeader = loadable(() => import("./Header/DesktopHeader"));
const MobileHeader = loadable(() => import("./Header/MoblieHeader"));

export default ({ isLoggedIn, platform }) => {
  let { pathname } = useLocation();

  const [logoutMutation] = useMutation(LOG_OUT);
  const [hide, setHide] = useState(false);
  const [hoverState, setHoverState] = useState(false);
  const [moblieTrigger, setMoblieTrigger] = useState(false);
  const [userName, setUserName] = useState("");

  const MainMenuEnter = () => {
    if (pathname === "/") setHoverState(true);
  };
  const MainMenuLeave = () => {
    if (pathname === "/") setHoverState(false);
  };

  const mobileOnClick = () => {
    if (!moblieTrigger) {
      let body = document.querySelector("body");
      body.style.overflow = "hidden";
    } else {
      let body = document.querySelector("body");
      body.style.overflow = "visible";
    }
    setMoblieTrigger(!moblieTrigger);
  };

  const { data, loading, error } = useQuery(USERNAME, { skip: !isLoggedIn });

  useEffect(() => {
    const handleScroll = () => {
      const { pageYOffset } = window;
      if (pathname === "/") {
        if (pageYOffset === 0) {
          setHoverState(false);
          setHide(true);
        } else {
          setHide(false);
        }
      } else {
        if (pageYOffset === 0) {
          setHide(true);
          setHoverState(true);
        } else {
          setHide(false);
        }
      }
    };

    //Auto logged out
    const log = getWithExpiry("log");
    if (log) {
      setWithExpiry("log", log, 1800000);
    }

    if (platform === "desktop") {
      let body = document.querySelector(".body-content");
      if (body) {
        body.style.width = "75%";
        body.style.margin = "120px auto 0px";
      }
    } else {
      let body = document.querySelector(".body-content");
      if (body) {
        body.style.width = "100%";
        body.style.margin = "64px auto 0px";
      }
    }
    window.scrollTo(0, 0);

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (isLoggedIn) {
      if (!error) {
        if (!loading) {
          setUserName(data.me.username);
        }
        if (error) {
          setUserName(globalText.text_member);
        }
      }
    } else {
      setUserName(globalText.text_member);
    }
  }, [isLoggedIn, loading, error, data, globalText]);

  return (
    <>
      {platform === "desktop" ? (
        <DesktopHeader
          hide={hide}
          pathname={pathname}
          categoryArray={categoryArray}
          logoutMutation={logoutMutation}
          isLoggedIn={isLoggedIn}
          hoverState={hoverState}
          MainMenuEnter={MainMenuEnter}
          MainMenuLeave={MainMenuLeave}
        />
      ) : (
        <MobileHeader
          categoryArray={categoryArray}
          isLoggedIn={isLoggedIn}
          moblieTrigger={moblieTrigger}
          mobileOnClick={mobileOnClick}
          userName={userName}
        />
      )}
    </>
  );
};
