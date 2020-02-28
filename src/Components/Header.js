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
  z-index: 10;
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
  width: 60%;
  height: 100%;
  line-height: 85px;

  &:first-child {
    display: flex;
    justify-content: center;
    width: 20%;
  }
  &:last-child {
    margin-right: auto;
    width: 20%;
  }
`;

const LogoWrapper = styled.div`
  display: block;
  top: 0;
  left: 0;
  z-index: 10;
  padding-top: 0;
  max-width: 195px;
  text-align: center;
  height: 100%;
`;

const HeaderMainLink = styled(Link)`
  text-decoration: none;
  margin-left: 32px;
  margin-right: 32px;
`;

const HeaderLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  margin-left: 16px;
  margin-right: 16px;
`;

const MainMenuText = styled.span`
  font-size: 16px;
  color: ${props =>
    props.hide ? props.theme.whiteColor : props.theme.blackColor};
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

  const categoryArray = [
    {
      text: globalText.text_reserve,
      to: {
        pathname: "/",
        state: {
          id: ""
        }
      }
    },
    {
      text: globalText.text_infomation,
      to: {
        pathname: "/",
        state: {
          id: ""
        }
      }
    },
    {
      text: globalText.text_event,
      to: {
        pathname: "/event",
        state: {
          id: ""
        }
      }
    },
    {
      text: globalText.text_free_board,
      to: {
        pathname: "/board/ck74d5iiz001b0734kmyiwdb7",
        state: {
          id: "ck74d5iiz001b0734kmyiwdb7"
        }
      }
    },
    {
      text: globalText.text_notice,
      to: {
        pathname: "/",
        state: {
          id: ""
        }
      }
    },
    {
      text: globalText.text_center,
      to: {
        pathname: "/",
        state: {
          id: ""
        }
      }
    },
    {
      text: globalText.text_roadmap,
      to: {
        pathname: "/",
        state: {
          id: ""
        }
      }
    }
  ];

  return (
    <>
      <Header>
        <AnimationWrapper hide={hide} />
        <HeaderWrapper hide={hide}>
          <HeaderColumn>
            <LogoWrapper>
              <HeaderLink to="/">
                <Logo />
              </HeaderLink>
            </LogoWrapper>
          </HeaderColumn>
          <HeaderColumn>
            {categoryArray.map((category, i) => {
              return (
                <HeaderMainLink key={i} to={category.to}>
                  <MainMenuText hide={hide}>{category.text}</MainMenuText>
                </HeaderMainLink>
              );
            })}
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
