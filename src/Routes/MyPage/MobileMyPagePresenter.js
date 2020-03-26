import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import { dateConverter } from "../../Utils";
const Container = styled.div``;
const Wrapper = styled.div``;

const Header = styled.div`
  height: 160px;
  width: 100%;
  background-color: ${props => props.theme.blackColor};
`;
const HeaderUserWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const HeaderUserImgWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 35%;
  height: 100%;
`;
const HeaderUserImg = styled.div`
  position: relative;
  width: 75%;
  height: 100%;
  margin: 0 auto;
`;
const HeaderUserInfo = styled.div`
  display: inline-block;
  position: relative;
  width: 65%;
  height: 100%;
  vertical-align: top;
  padding: 32px 0px;
`;
const HeaderUserInfoName = styled.div`
  display: inline-block;
  color: ${props => props.theme.whiteColor};
  font-weight: 500;
  font-size: 24px;
`;
const HeaderUserInfoId = styled.div`
  display: inline-block;
  color: ${props => props.theme.whiteColor};
  font-size: 21px;
  padding: 0px 8px;
`;
const HeaderUserLogout = styled.div`
  display: inline-block;
  font-size: 14px;
  color: ${props => props.theme.darkGreyColor};
  margin-left: 8px;
  padding: 8px 0px;
`;
const ChangeButtonWrapper = styled.div`
  text-align: end;
  position: absolute;
  bottom: 32px;
  right: 0;
`;
const ChangeButton = styled.div`
  display: inline-block;
  color: ${props => props.theme.liteGreyColor};
  font-size: 14px;
  padding: 8px 8px;
  margin-top: 24px;
`;
const HeaderUserInfoJoindate = styled.div`
  position: absolute;
  color: ${props => props.theme.darkGreyColor};
  font-size: 14px;
  padding: 8px 8px;
  text-align: end;
  bottom: 0;
  right: 0;
`;
export default ({ data: { me }, globalText, logoutMutation }) => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <HeaderUserWrapper>
            <HeaderUserImgWrapper>
              <HeaderUserImg>
                <PersonIcon
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%"
                  }}
                />
              </HeaderUserImg>
            </HeaderUserImgWrapper>
            <HeaderUserInfo>
              <Link to="/account">
                <HeaderUserInfoName>{me.username}</HeaderUserInfoName>
              </Link>
              <Link to="/account">
                <HeaderUserInfoId>({me.userId})</HeaderUserInfoId>
              </Link>
              <HeaderUserLogout onClick={() => logoutMutation()}>
                로그아웃
              </HeaderUserLogout>
              <ChangeButtonWrapper>
                <Link to="/change">
                  <ChangeButton>
                    {globalText.text_user_info_change}
                  </ChangeButton>
                </Link>
              </ChangeButtonWrapper>
              <HeaderUserInfoJoindate>
                {globalText.text_user_createdAt +
                  " : " +
                  dateConverter(me.createdAt)}
              </HeaderUserInfoJoindate>
            </HeaderUserInfo>
          </HeaderUserWrapper>
        </Header>
      </Wrapper>
    </Container>
  );
};
