import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "../Styles/Theme";
import GlobalStyles from "../Styles/GlobalStyles";
import Header from "./Header";
import Routes from "./Routes";
import Footer from "./Footer";

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
