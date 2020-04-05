import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Logo } from "../Icons";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import CloseIcon from "@material-ui/icons/Close";
import { globalText } from "../../GlobalText";
const Header = styled.header`
  transition: all 0.3s ease-out;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3000;
  width: 100%;
  height: 64px;
  background: #fff;
  border-bottom: 1px solid #ebebeb;
`;

const HeaderWrapper = styled.div`
  position: relative;
  display: block;
  height: 100%;
  margin: 0 auto;
`;

const HeaderTitle = styled.div`
  width: calc(100% - 5rem);
  height: 100%;
  position: absolute;
  display: inline-block;
`;

const HeaderTitleInner = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  max-width: 140px;
  justify-content: center;
  align-items: center;
`;

const HeaderButton = styled.button`
  -webkit-appearance: button;
  cursor: pointer;
  border: 0;
  padding: 0;
  background-image: none;
  display: block;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1002;
  width: 2rem;
  height: 2rem;
  background: none;
  text-transform: none;
  overflow: visible;
  font: inherit;
  color: inherit;
  margin: 0;
`;

const NavContainer = styled.div`
  display: block;
  position: fixed;
  left: ${(props) => (props.moblieTrigger ? "10%" : "100%")};
  transition: left 0.2s linear;
  z-index: 9001;
  width: 90%;
  min-height: 100%;
  top: 0;
  height: 100%;
  background: #fff;
`;

const NavWrapper = styled.div`
  z-index: 9001;
  width: 100%;
  padding: 16rem 0 0;
  position: relative;
  background: #fff;
  height: 100%;
`;

const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0;
  width: 100%;
  height: 16rem;
  text-align: left;
  white-space: nowrap;
  color: #666;
`;

const WelcomeWrapper = styled.div`
  display: flex;
  position: relative;
  background: #3b3b3b;
  height: 12rem;
  text-align: left;
  align-items: center;
  padding-left: 1.5rem;
`;
const WelcomeText = styled.p`
  width: 100%;
  color: #fff;
  font-size: 1.2rem;
  font-weight: normal;
  line-height: 3.75rem;
`;
const MenuTopWrapper = styled.div`
  width: calc(100% - 4rem);
  position: absolute;
  right: 1rem;
  bottom: 6rem;
  display: block;
`;

const JoinLink = styled(Link)`
  float: right;
  color: #fff;
  border: 1px solid #575757;
  font-size: 0.8rem;
  height: 1.5rem;
  line-height: 1.5rem;
  padding: 0 0.5rem;
  margin-left: 0.5rem;
`;

const MenuBottomWrapper = styled.div`
  position: relative;
  background: #2b2b2b;
  overflow: hidden;
  margin-left: 0;
  display: block;
  background: #575757;
`;

const MenuBottomFLink = styled(Link)`
  float: left;
  display: block;
  width: 50%;
  padding: 1.25rem 0;
  text-align: center;
  color: #d8d8d8;
  margin-left: 0;
`;

const MenuBottomSLink = styled(Link)`
  float: left;
  display: block;
  width: 50%;
  padding: 1.25rem 0;
  text-align: center;
  color: #d8d8d8;
  margin-left: 0;
`;

const GnbWrapper = styled.div`
  height: 100%;
  overflow-y: scroll;
  width: 100%;
  text-align: center;
  padding: 0;
`;

const GnbMenuUl = styled.ul`
  float: none;
  display: block;
  list-style: none;
`;

const GnbMenuLi = styled.li`
  position: relative;
  float: none;
  display: block;
  font-size: 2rem;
  width: 100%;
  text-align: left;
  max-width: 100%;
  line-height: 3rem;
  border-bottom: 1px solid #e6e6e6;
`;

const GnbLink = styled(Link)`
  display: inline-block;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  height: 100%;
`;

const GnbMenuText = styled.div`
  width: 100%;
  font-size: 16px;
  color: ${(props) => props.theme.blackColor};
`;

const CloseButton = styled.button`
  display: block;
  position: absolute;
  top: 1.5rem;
  right: 20px;
  width: 2.2rem;
  height: 2.2rem;
  background: transparent;
  z-index: 9002;
`;

const StyledCloseIcon = styled(CloseIcon)`
  color: ${(props) => props.theme.whiteColor};
`;

export default ({
  categoryArray,
  isLoggedIn,
  moblieTrigger,
  mobileOnClick,
  userName,
}) => {
  return (
    <Header>
      <HeaderWrapper>
        <HeaderTitle>
          <HeaderTitleInner>
            <Link to="/">
              <Logo />
            </Link>
          </HeaderTitleInner>
        </HeaderTitle>
        <HeaderButton onClick={mobileOnClick}>
          <MenuOpenIcon />
        </HeaderButton>
        <NavContainer moblieTrigger={moblieTrigger}>
          <NavWrapper>
            <MenuWrapper>
              <WelcomeWrapper>
                {isLoggedIn ? (
                  <Link to="/login" onClick={mobileOnClick}>
                    <WelcomeText>
                      {userName}
                      {globalText.text_welcome_login}
                    </WelcomeText>
                  </Link>
                ) : (
                  <Link to="/login" onClick={mobileOnClick}>
                    <WelcomeText>{globalText.text_welcome_logout}</WelcomeText>
                  </Link>
                )}
              </WelcomeWrapper>
              <MenuTopWrapper>
                {isLoggedIn ? (
                  <JoinLink to="/mypage" onClick={mobileOnClick}>
                    {globalText.text_mypage}
                  </JoinLink>
                ) : (
                  <JoinLink to="/joinagree" onClick={mobileOnClick}>
                    {globalText.text_join}
                  </JoinLink>
                )}
              </MenuTopWrapper>
              <MenuBottomWrapper>
                {isLoggedIn ? (
                  <MenuBottomFLink
                    to="/mypage/reservations"
                    onClick={mobileOnClick}
                  >
                    {globalText.text_reserve_check}
                  </MenuBottomFLink>
                ) : (
                  <MenuBottomFLink
                    to="/help/checkreservation"
                    onClick={mobileOnClick}
                  >
                    {globalText.text_reserve_check}
                  </MenuBottomFLink>
                )}

                <MenuBottomSLink to="/reservation" onClick={mobileOnClick}>
                  {globalText.text_reserve_do}
                </MenuBottomSLink>
              </MenuBottomWrapper>
            </MenuWrapper>
            <GnbWrapper>
              <GnbMenuUl>
                {categoryArray.map((category, i) => {
                  return (
                    <GnbMenuLi key={i}>
                      <GnbLink to={category.to} onClick={mobileOnClick}>
                        <GnbMenuText>{category.text}</GnbMenuText>
                      </GnbLink>
                    </GnbMenuLi>
                  );
                })}
              </GnbMenuUl>
            </GnbWrapper>
          </NavWrapper>
          <CloseButton onClick={mobileOnClick}>
            <StyledCloseIcon />
          </CloseButton>
        </NavContainer>
      </HeaderWrapper>
    </Header>
  );
};
