import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { useQuery, useMutation } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "../Styles/Theme";
import GlobalStyles from "../Styles/GlobalStyles";
import Header from "./Header";
import Routes from "./Routes";
import Footer from "./Footer";
import { LOG_OUT } from "../SharedQueries";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const useWindowSize = () => {
  const isClient = typeof window === "object";

  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined
  });

  useEffect(() => {
    const getSize = () => {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
      };
    };

    if (!isClient) {
      return false;
    }

    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  return windowSize;
};

export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);

  const [platform, setPlatform] = useState();

  const screenSize = useWindowSize();

  useEffect(() => {
    if (screenSize.width <= 760) {
      setPlatform("mobile");
    } else {
      setPlatform("desktop");
    }
  }, [screenSize]);

  //auto logout

  const [logoutMutation] = useMutation(LOG_OUT);
  const [signoutTime, setSignoutTime] = useState(1800000);
  let logoutTimeout;

  useEffect(() => {
    if (isLoggedIn) {
      const events = [
        "load",
        "mousemove",
        "mousedown",
        "click",
        "scroll",
        "keypress"
      ];
      const logout = () => {
        logoutMutation();
        for (let i in events) {
          window.removeEventListener(events[i], resetTimeout);
        }
        clearTimeouts();
      };

      const setTimeouts = () => {
        logoutTimeout = setTimeout(logout, signoutTime);
      };

      const clearTimeouts = () => {
        if (logoutTimeout) clearTimeout(logoutTimeout);
      };
      const resetTimeout = () => {
        clearTimeouts();
        setTimeouts();
      };

      for (let i in events) {
        window.addEventListener(events[i], resetTimeout);
      }

      setTimeouts();

      window.addEventListener("beforeunload", ev => {
        ev.preventDefault();
        logoutMutation();
        //return (ev.returnValue = "Are you sure you want to close?");
      });

      return () => {
        for (let i in events) {
          window.removeEventListener(events[i], resetTimeout);
          clearTimeouts();
        }
      };
    }
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router basename="/">
          <>
            <Header isLoggedIn={isLoggedIn} platform={platform} />
            <Wrapper>
              <Routes
                isLoggedIn={isLoggedIn}
                platform={platform}
                screenSize={screenSize}
              />
              <Footer platform={platform} />
            </Wrapper>
          </>
        </Router>
      </>
    </ThemeProvider>
  );
};
