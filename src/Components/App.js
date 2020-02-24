import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import { HashRouter as Router } from "react-router-dom";
import Theme from "../Styles/Theme";
import GlobalStyles from "../Styles/GlobalStyles";
import Header from "./Header";
import Routes from "./Routes";

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
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          <>
            <Header isLoggedIn={isLoggedIn} />
            <Wrapper>
              <Routes isLoggedIn={isLoggedIn} />
            </Wrapper>
          </>
        </Router>
      </>
    </ThemeProvider>
  );
};