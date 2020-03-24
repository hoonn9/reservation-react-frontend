import React from "react";
import styled from "styled-components";
import AnimateHeight from "react-animate-height";
import { Link } from "react-router-dom";
import { Logo } from "../Icons";

const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3000;
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
  z-index: -4;
`;

const HoverWrapper = styled.div`
  width: 100%;
  position: absolute;
  background-color: ${props => props.theme.whiteColor};
  opacity: ${props => (props.hoverState ? 1 : 0)};
  transition: opacity 0.15s linear;
  z-index: -5;
`;
const HeaderWrapper = styled.div`
  width: 100%;
  background-color: ${props =>
    props.hide ? props.theme.transparentColor : props.theme.whiteColor};
  transition: ${props =>
    props.pathname === "/"
      ? props.hide
        ? ""
        : "background-color 0.5s linear"
      : null};
`;
const HeaderInner = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 85px;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${props => (props.hide ? "32px" : "0px")};
  margin-bottom: ${props => (props.hide ? "32px" : "0px")};
`;

const LogoColumn = styled.div`
  display: inline-block;
  width: 20%;
  z-index: 200;
`;
const MainMenuColumn = styled.div`
  display: inline-block;
  width: 70%;
  height: 100%;
  line-height: 85px;
`;
const SubMenuColumn = styled.div`
  position: absolute;
  visibility: ${props => (props.hide ? "visible" : "hidden")};
  right: 0;
  top: 0px;
  width: 20%;
  margin-top: 32px;
  z-index: 100;
`;

const LogoWrapper = styled.div`
  display: block;
  padding-top: 0;
  max-width: 195px;
  text-align: center;
  height: 100%;
`;

const HeaderMainLink = styled(Link)`
  text-decoration: none;
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
  margin: 0px 8px;
`;

const MainMenuText = styled.span`
  font-size: 16px;
  color: ${props =>
    props.hide
      ? props.hoverState
        ? props.theme.blackColor
        : props.theme.whiteColor
      : props.theme.blackColor};
`;

const MainMenuListWrapper = styled.ul`
  display: table;
  width: 100%;
  table-layout: fixed;
  float: right;
`;
const MainMenuListElement = styled.li`
  display: table-cell;
  position: relative;
  vertical-align: top;
  padding: 0;
  max-width: 14.28%;
  text-align: center;
`;

const SubMenuText = styled.span`
  font-size: 13px;
  color: ${props =>
    props.hide
      ? props.hoverState
        ? props.theme.blackColor
        : props.theme.whiteColor
      : props.theme.blackColor};
`;
export default ({
  hide,
  pathname,
  hoverState,
  setHoverState,
  categoryArray,
  logoutMutation,
  globalText,
  isLoggedIn
}) => {
  return (
    <Header>
      <AnimationWrapper hide={hide} />
      <HoverWrapper hoverState={hoverState}>
        {hide ? (
          <AnimateHeight duration={150} height={hoverState ? 120 : 0}>
            <span />
          </AnimateHeight>
        ) : null}
      </HoverWrapper>
      <SubMenuColumn hide={hide}>
        {isLoggedIn ? (
          <>
            <HeaderLink to="/" onClick={logoutMutation}>
              <SubMenuText hide={hide} hoverState={hoverState}>
                {globalText.text_logout}
              </SubMenuText>
            </HeaderLink>
            <HeaderLink to="/mypage">
              <SubMenuText hide={hide} hoverState={hoverState}>
                {globalText.text_mypage}
              </SubMenuText>
            </HeaderLink>
          </>
        ) : (
          <>
            <HeaderLink to="/login">
              <SubMenuText hide={hide} hoverState={hoverState}>
                {globalText.text_login}
              </SubMenuText>
            </HeaderLink>
            <HeaderLink to="/joinagree">
              <SubMenuText hide={hide} hoverState={hoverState}>
                {globalText.text_join}
              </SubMenuText>
            </HeaderLink>
          </>
        )}
      </SubMenuColumn>
      <HeaderWrapper hide={hide} pathname={pathname}>
        <HeaderInner hide={hide} pathname={pathname}>
          <LogoColumn>
            <LogoWrapper>
              <HeaderLink to="/">
                <Logo />
              </HeaderLink>
            </LogoWrapper>
          </LogoColumn>
          <MainMenuColumn>
            <MainMenuListWrapper>
              {categoryArray.map((category, i) => {
                return (
                  <MainMenuListElement
                    key={i}
                    onMouseEnter={() => {
                      if (pathname === "/") setHoverState(true);
                    }}
                    onMouseLeave={() => {
                      if (pathname === "/") setHoverState(false);
                    }}
                  >
                    <HeaderMainLink
                      key={i}
                      to={category.to}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <MainMenuText hide={hide} hoverState={hoverState}>
                        {category.text}
                      </MainMenuText>
                    </HeaderMainLink>
                  </MainMenuListElement>
                );
              })}
            </MainMenuListWrapper>
          </MainMenuColumn>
        </HeaderInner>
      </HeaderWrapper>
    </Header>
  );
};
