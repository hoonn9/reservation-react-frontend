import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "../Styles/Theme";
import GlobalStyles from "../Styles/GlobalStyles";
import Header from "./Header";
import Routes from "./Routes";
import Footer from "./Footer";
import GlobalText from "../GlobalText";
import { getFrontUri } from "../Utils";

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
    height: isClient ? window.innerHeight : undefined,
  });
  useEffect(() => {
    const getSize = () => {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined,
      };
    };

    const handleResize = () => {
      setWindowSize(getSize());
    };

    if (!isClient) {
      return false;
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  return windowSize;
};

const usePlatform = (screenSize) => {
  const [platform, setPlatform] = useState("desktop");

  useEffect(() => {
    if (screenSize.width <= 760) {
      setPlatform("mobile");
      let body = document.querySelector(".body-content");
      if (body) {
        body.style.width = "100%";
        body.style.margin = "64px auto 0px";
        body.style.minHeight = `${screenSize.height}px`;
      }
    } else {
      setPlatform("desktop");
      let body = document.querySelector(".body-content");
      if (body) {
        body.style.width = "75%";
        body.style.margin = "120px auto 0px";
        body.style.minHeight = `${screenSize.height}px`;
      }
    }
  }, [screenSize]);

  return platform;
};

export default () => {
  const globalText = GlobalText();

  const {
    data: { isLoggedIn },
  } = useQuery(QUERY);

  const screenSize = useWindowSize();
  const platform = usePlatform(screenSize);

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router basename="/">
          <>
            <Header
              isLoggedIn={isLoggedIn}
              platform={platform}
              globalText={globalText}
            />
            <Wrapper className="body-main">
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
