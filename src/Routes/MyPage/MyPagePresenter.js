import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import { dateConverter } from "../../Utils";
const Container = styled.div`
  margin-top: 120px;
`;
const Wrapper = styled.div``;

const Header = styled.div`
  height: 240px;
  width: 100%;
  background-color: ${props => props.theme.blackColor};
`;
const HeaderUserWrapper = styled.div`
  position: relative;
  width: 70%;
  height: 100%;
`;
const HeaderUserImgWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 50%;
  height: 100%;
`;
const HeaderUserImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const HeaderUserInfo = styled.div`
  display: inline-block;
  position: relative;
  width: 50%;
  height: 100%;
  vertical-align: top;
  padding: 32px 0px;
`;
const HeaderUserInfoName = styled.div`
  display: inline-block;
  color: ${props => props.theme.whiteColor};
  font-weight: 600;
  font-size: 48px;
`;
const HeaderUserInfoId = styled.div`
  display: inline-block;
  color: ${props => props.theme.whiteColor};
  font-size: 24px;
  padding: 0px 8px;
`;
const ChangeButton = styled.div`
  display: inline-block;
  color: ${props => props.theme.liteGreyColor};
  font-size: 16px;
  padding: 0px 8px;
`;
const HeaderUserInfoJoindate = styled.div`
  color: ${props => props.theme.liteGreyColor};
  font-size: 18px;
  padding: 32px 0px;
`;
export default ({ data: { me } }) => {
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
              <HeaderUserInfoName>{me.username}</HeaderUserInfoName>
              <HeaderUserInfoId>({me.userId})</HeaderUserInfoId>
              <Link to="/mypage/change">
                <ChangeButton>회원정보변경</ChangeButton>
              </Link>
              <HeaderUserInfoJoindate>
                가입일 : {dateConverter(me.createdAt)}
              </HeaderUserInfoJoindate>
            </HeaderUserInfo>
          </HeaderUserWrapper>
        </Header>
      </Wrapper>
    </Container>
  );
};
