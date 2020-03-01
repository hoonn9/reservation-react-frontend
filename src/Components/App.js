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

export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);
  const [platform, setPlatform] = useState();
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth <= 760) {
        setPlatform("mobile");
      } else {
        setPlatform("desktop");
      }
    };
    resize();
    window.addEventListener("resize", resize);
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router basename="/">
          <>
            <Header isLoggedIn={isLoggedIn} platform={platform} />
            <Wrapper>
              <Routes isLoggedIn={isLoggedIn} platform={platform} />
              <Footer />
            </Wrapper>
          </>
        </Router>
      </>
    </ThemeProvider>
  );
};
