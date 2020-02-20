import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import useInput from "../Hooks/useInput";
import Input from "../Components/Input";
import Button from "../Components/Button";
import GlobalText from "../GlobalText";
import { Logo } from "../Components/Icons";

const LoginContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginWrapper = styled.div`
  width: 33%;
  display: block;
`;
const LoginInput = styled(Input)`
  display: block;
  width: 100%;
  height: 50px;
  margin-bottom: 12px;
`;

const LoginButton = styled(Button)`
  display: block;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const JoinWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const LoginLink = styled(Link)`
  text-decoration: none;
  margin: 16px 16px 0px 0px;
  font-size: 14px;
  color: ${props => props.theme.blackColor};
`;

export default () => {
  const globalText = GlobalText();

  const userId = useInput("");
  const userPw = useInput("");

  return (
    <LoginContainer>
      <LoginWrapper>
        <LogoWrapper>
          <Logo size={50} />
        </LogoWrapper>

        <LoginInput
          onChange={userId.onChange}
          value={userId.value}
          placeholder={globalText.text_id}
        />
        <LoginInput
          onChange={userPw.onChange}
          value={userPw.value}
          placeholder={globalText.text_pw}
          type="password"
        />
        <LoginButton text={globalText.text_login} onClick={() => null} />
        <JoinWrapper>
          <LoginLink to="/joinagree">{globalText.text_join}</LoginLink>
          <LoginLink to="/">{"아이디 찾기"}</LoginLink>
          <LoginLink to="/">{"비밀번호 찾기"}</LoginLink>
        </JoinWrapper>
      </LoginWrapper>
    </LoginContainer>
  );
};
