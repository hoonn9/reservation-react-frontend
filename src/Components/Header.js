import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import GlobalText from "../GlobalText";

const Header = styled.header`
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 25px 0px;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HeaderColumn = styled.div`
  width: 33%;
  &:first-child {
    margin-left: auto;
  }
  &:last-child {
    margin-right: auto;
  }
`;

export default () => {
  const globalText = GlobalText();

  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <Link to="/">Home</Link>
        </HeaderColumn>
        <HeaderColumn></HeaderColumn>
        <HeaderColumn>
          <Link to="/login">{globalText.text_login}</Link>
          <Link to="/join">{globalText.text_join}</Link>
          <Link to="/mypage">{globalText.text_mypage}</Link>
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
};
