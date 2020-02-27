import styled from "styled-components";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useInput from "../Hooks/useInput";
import Input from "../Components/Input";
import Button from "../Components/Button";
import GlobalText from "../GlobalText";
import { Logo } from "../Components/Icons";
import { LOCAL_LOG_IN, LOGIN_USER } from "../SharedQueries";
import { useMutation } from "react-apollo-hooks";
import ReactLoading from "react-loading";

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

const Wrapper = styled.div`
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

const Text = styled.div`
  font-size: 14px;
  color: red;
  margin-bottom: 8px;
`;

export default () => {
  const globalText = GlobalText();
  const history = useHistory();
  const userId = useInput("");
  const userPw = useInput("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginUserMutation] = useMutation(LOGIN_USER, {
    variables: {
      userId: userId.value,
      password: userPw.value
    }
  });
  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

  const onKeyPress = async event => {
    const { which } = event;
    if (which === 13) {
      event.preventDefault();
      handelLogin();
    }
  };

  const handelLogin = async () => {
    try {
      setLoading(true);
      const {
        data: { loginUser: token }
      } = await loginUserMutation();

      if (token === "false") {
        setMsg(globalText.text_login_pw_error);
        setLoading(false);
      } else if (token && token !== "false" && token !== undefined) {
        setMsg("");
        localLogInMutation({ variables: { token } });
        window.location.reload(false);
        history.history("/");
      } else {
        setLoading(false);
        throw Error();
      }
    } catch (error) {
      setMsg(globalText.text_login_error);
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <Wrapper>
          <Logo size={50} />
        </Wrapper>

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
          onKeyPress={onKeyPress}
        />
        <Text>{msg}</Text>
        {loading ? (
          <LoginButton text={globalText.text_login} disabled />
        ) : (
          <LoginButton text={globalText.text_login} onClick={handelLogin} />
        )}

        <Wrapper>
          {loading ? (
            <ReactLoading
              type="bubbles"
              color="#000000"
              height={"30px"}
              width={"50px"}
            />
          ) : (
            <div></div>
          )}
        </Wrapper>
        <Wrapper>
          <LoginLink to="/joinagree">{globalText.text_join}</LoginLink>
          <LoginLink to="/">{"아이디 찾기"}</LoginLink>
          <LoginLink to="/">{"비밀번호 찾기"}</LoginLink>
        </Wrapper>
      </LoginWrapper>
    </LoginContainer>
  );
};
