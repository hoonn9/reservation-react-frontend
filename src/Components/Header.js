import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import GlobalText from "../GlobalText";
import { Logo } from "./Icons";
import { useMutation } from "react-apollo-hooks";
import { LOG_OUT } from "../SharedQueries";
const Header = styled.header`
  width: 100%;
  position: fixed;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 1;
  height: 120px;
`;

const AnimationWrapper = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  height: 120px;
  background-color: ${props =>
    props.hide ? props.theme.transparentColor : props.theme.whiteColor};
  opacity: ${props => (props.hide ? 1 : 0)};
  transition: opacity 2s linear;
  transition: background-color 0.5s linear;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 85px;
  position: absolute;
  display: flex;
  margin: ${props => (props.hide ? "32px 0px" : "0px")};
  background-color: ${props =>
    props.hide ? props.theme.transparentColor : props.theme.whiteColor};
  transition: ${props => (props.hide ? "" : "background-color 0.5s linear")};

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
  height: 100%;
  line-height: 85px;

  &:first-child {
    margin-left: auto;
  }
  &:last-child {
    margin-right: auto;
  }
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
  font-size: 13px;
  margin-left: 16px;
  margin-right: 16px;
`;

const MainMenuText = styled.span`
  font-size: 16px;
  color: ${props =>
    props.hide ? props.theme.whiteColor : props.theme.blackColor};
  font-weight: bold;
`;

const SubMenuText = styled.span`
  font-size: 13px;
  color: ${props =>
    props.hide ? props.theme.whiteColor : props.theme.blackColor};
`;

export default ({ isLoggedIn }) => {
  let { pathname } = useLocation();
  const globalText = GlobalText();
  const [logoutMutation] = useMutation(LOG_OUT);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const { pageYOffset } = window;
      if (pathname === "/") {
        if (pageYOffset === 0) {
          setHide(true);
        } else {
          setHide(false);
        }
      } else {
        setHide(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <>
      <Header>
        <AnimationWrapper hide={hide} />
        <HeaderWrapper hide={hide}>
          <HeaderColumn>
            <HeaderLink to="/">
              <Logo />
            </HeaderLink>
          </HeaderColumn>
          <HeaderColumn>
            <HeaderLink
              to={{
                pathname: "/board/ck73bia6s01bh0a68pax471bu",
                state: {
                  id: "ck73bia6s01bh0a68pax471bu"
                }
              }}
            >
              <MainMenuText hide={hide}>
                {globalText.text_free_board}
              </MainMenuText>
            </HeaderLink>
          </HeaderColumn>
          <HeaderColumn>
            {isLoggedIn ? (
              <>
                <HeaderLink to="/" onClick={logoutMutation}>
                  <SubMenuText hide={hide}>
                    {globalText.text_logout}
                  </SubMenuText>
                </HeaderLink>
                <HeaderLink to="/mypage">
                  <SubMenuText hide={hide}>
                    {globalText.text_mypage}
                  </SubMenuText>
                </HeaderLink>
              </>
            ) : (
              <>
                <HeaderLink to="/login">
                  <SubMenuText hide={hide}>{globalText.text_login}</SubMenuText>
                </HeaderLink>
                <HeaderLink to="/joinagree">
                  <SubMenuText hide={hide}>{globalText.text_join}</SubMenuText>
                </HeaderLink>
              </>
            )}
          </HeaderColumn>
        </HeaderWrapper>
      </Header>
    </>
  );
};
