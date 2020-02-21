import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import GlobalText from "../GlobalText";
import { Logo } from "./Icons";
import { useMutation } from "react-apollo-hooks";
import { LOG_OUT } from "../SharedQueries";
const Header = styled.header`
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  padding: 25px 0px;
  background-color: ${props => props.theme.superLiteGreyColor};
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  div:first-child {
    text-align: left;
  }
  div:last-child {
    text-align: right;
  }
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

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.blackColor};
  font-size: 13px;
  margin-left: 16px;
`;

export default ({ isLoggedIn }) => {
  const globalText = GlobalText();
  const [logoutMutation] = useMutation(LOG_OUT);
  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <HeaderLink to="/">
            <Logo />
          </HeaderLink>
        </HeaderColumn>
        <HeaderColumn></HeaderColumn>
        <HeaderColumn>
          {isLoggedIn ? (
            <>
              <HeaderLink to="/" onClick={logoutMutation}>
                {globalText.text_logout}
              </HeaderLink>
              <HeaderLink to="/mypage">{globalText.text_mypage}</HeaderLink>
            </>
          ) : (
            <>
              <HeaderLink to="/login">{globalText.text_login}</HeaderLink>
              <HeaderLink to="/joinagree">{globalText.text_join}</HeaderLink>
            </>
          )}
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
};
