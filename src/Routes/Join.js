import styled from "styled-components";
import React from "react";
import { Link, Redirect } from "react-router-dom";
import useInput from "../Hooks/useInput";
import GlobalText from "../GlobalText";
import { Logo } from "../Components/Icons";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Input from "../Components/Input";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 33%;
  display: block;
`;
const JoinInput = styled(Input)`
  display: block;
  width: 100%;
  height: 50px;
  margin-bottom: 12px;
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

const Text = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  margin-top: 24px;
`;

const Msg = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: red;
`;

const JoinButton = styled.button`
  width: 100%;
  height: 50px;
  border: 0;
  color: white;
  font-weight: 600;
  margin-top: 48px;
  margin-left: 32px;
  margin-right: 32px;
  background-color: ${props => props.theme.blackColor};
  text-align: center;
  font-size: 14px;
  cursor: pointer;
`;

export default ({ location: { state } }) => {
  const globalText = GlobalText();
  let history = useHistory();
  let isAgree = null;

  useEffect(() => {
    try {
      isAgree = state.isAgree;
    } catch (e) {
      //history.push("/");
    }
  });

  const userId = useInput("");
  const [msgId, setMsgId] = useState("");
  const userPw = useInput("");
  const [msgPw, setMsgPw] = useState("");
  const userPwCofirm = useInput("");
  const [msgPwcf, setMsgPwcf] = useState("");
  const userName = useInput("");
  const userEmail = useInput("");
  const [msgEmail, setMsgEmail] = useState("");
  const userPhone = useInput("");
  const [msgPhone, setMsgPhone] = useState("");
  const userAddress = useInput("");
  const idRegex = /^[a-z]{1}[a-z0-9]{4,19}$/;
  const pwRegex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=-_]).*$/;
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegex = /^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/;
  const phoneConvertRegex = /^\d(11)$/;
  const emailBlur = () => {
    if (!emailRegex.test(userEmail.value)) {
      setMsgEmail(globalText.text_email_error);
    } else {
      setMsgEmail("");
    }
  };

  const idBlur = () => {
    if (!idRegex.test(userId.value)) {
      setMsgId(globalText.text_id_error);
    } else {
      setMsgId("");
    }
  };

  const pwBlur = () => {
    if (!pwRegex.test(userPw.value)) {
      setMsgPw(globalText.text_pw_error);
    } else {
      setMsgPw("");
    }
  };

  const phoneBlur = () => {
    if (phoneConvertRegex.test(userPhone.value)) {
      console.log("체크");
      userPhone.setValue(
        userPhone.value.substr(0, 3) +
          "-" +
          userPhone.value.substr(3, 4) +
          "-" +
          userPhone.value.substr(7, 4)
      );
    } else if (!phoneRegex.test(userPhone.value)) {
      setMsgPhone(globalText.text_pw_error);
    } else {
      setMsgPhone("");
    }
  };
  const handleSignUp = async () => {
    const { value: id } = userId;
    const { value: pw } = userPw;
    const { value: pwcf } = userPwCofirm;
    const { value: phone } = userPhone;
    const { value: address } = userAddress;
    const { value: name } = userName;
  };

  return (
    <>
      <Container>
        <Wrapper>
          <LogoWrapper>
            <Logo size={50} />
          </LogoWrapper>
          <Text>{globalText.text_id}</Text>
          <JoinInput
            onChange={userId.onChange}
            onBlur={idBlur}
            value={userId.value}
            placeholder=""
          />
          <Msg>{msgId}</Msg>
          <Text>{globalText.text_pw}</Text>
          <JoinInput
            onChange={userPw.onChange}
            onBlur={pwBlur}
            value={userPw.value}
            placeholder=""
            type="password"
          />
          <Msg>{msgPw}</Msg>
          <Text>{globalText.text_pw_confirm}</Text>
          <JoinInput
            onChange={userPwCofirm.onChange}
            value={userPwCofirm.value}
            placeholder=""
            type="password"
          />
          <Msg>{msgPwcf}</Msg>
          <Text>{globalText.text_name}</Text>
          <JoinInput
            onChange={userName.onChange}
            value={userName.value}
            placeholder=""
          />
          <Text>{globalText.text_email}</Text>
          <JoinInput
            onChange={userEmail.onChange}
            value={userEmail.value}
            placeholder=""
            onBlur={emailBlur}
          />
          <Msg>{msgEmail}</Msg>
          <Text>{globalText.text_phone_num}</Text>
          <JoinInput
            onChange={userPhone.onChange}
            value={userPhone.value}
            onBlur={phoneBlur}
            placeholder=""
          />
          <Msg>{msgPhone}</Msg>
          <Text>{globalText.text_address}</Text>
          <JoinInput
            onChange={userAddress.onChange}
            value={userAddress.value}
            placeholder=""
          />
          <JoinWrapper>
            <JoinButton onClick={() => null}>
              {globalText.text_cancel}
            </JoinButton>
            <JoinButton onClick={() => null}>{globalText.text_join}</JoinButton>
          </JoinWrapper>
        </Wrapper>
      </Container>
    </>
  );
};
