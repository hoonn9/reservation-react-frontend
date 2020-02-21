import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useInput from "../../Hooks/useInput";
import GlobalText from "../../GlobalText";
import JoinPresenter from "./JoinPresenter";
import { useMutation } from "react-apollo-hooks";
import { CREATE_ACCOUNT } from "./JoinQueries";
import { LOCAL_LOG_IN } from "../../SharedQueries";

const idRegex = /^[a-z]{1}[a-z0-9]{4,19}$/;
const pwRegex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=-_]).*$/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/;
const phoneRegex2 = /^[0-9]{3}[0-9]{4}[0-9]{4}$/;
const phoneConvertRegex = /^[0-9]{11}$/;

export default ({ location: { state } }) => {
  const globalText = GlobalText();
  let history = useHistory();
  let isAgree = null;
  const [isDone, setIsDone] = useState(false);

  const userId = useInput("");
  const [msgId, setMsgId] = useState("");
  const userPw = useInput("");
  const [msgPw, setMsgPw] = useState("");
  const userPwConfirm = useInput("");
  const [msgPwcf, setMsgPwcf] = useState("");
  const userName = useInput("");
  const userEmail = useInput("");
  const [msgEmail, setMsgEmail] = useState("");
  const userPhone = useInput("");
  const [msgPhone, setMsgPhone] = useState("");
  const userAddress = useInput("");

  const idBlur = () =>
    !idRegex.test(userId.value)
      ? setMsgId(globalText.text_id_error)
      : setMsgId("");

  const pwBlur = () =>
    !pwRegex.test(userPw.value)
      ? setMsgPw(globalText.text_pw_error)
      : setMsgPw("");

  const emailBlur = () =>
    !emailRegex.test(userEmail.value)
      ? setMsgEmail(globalText.text_email_error)
      : setMsgEmail("");

  const pwCfBlur = () =>
    userPwConfirm.value !== userPw.value
      ? setMsgPwcf(globalText.text_pwcf_error)
      : setMsgPwcf("");

  const phoneBlur = () => {
    if (phoneConvertRegex.test(userPhone.value)) {
      userPhone.setValue(
        userPhone.value.substr(0, 3) +
          "-" +
          userPhone.value.substr(3, 4) +
          "-" +
          userPhone.value.substr(7, 4)
      );
    }
    if (
      !phoneRegex.test(userPhone.value) &&
      !phoneRegex2.test(userPhone.value)
    ) {
      setMsgPhone(globalText.text_phone_error);
    } else {
      setMsgPhone("");
    }
  };
  const handleSignUp = async () => {
    const { value: id } = userId;
    const { value: pw } = userPw;
    const { value: pwcf } = userPwConfirm;
    const { value: name } = userName;
    const { value: email } = userEmail;
    const { value: phone } = userPhone;
    const { value: address } = userAddress;

    if (
      id === "" ||
      pw === "" ||
      pwcf === "" ||
      name === "" ||
      email === "" ||
      phone === ""
    ) {
      return false;
    } else {
      if (
        !idRegex.test(userId.value) ||
        !pwRegex.test(userPw.value) ||
        !emailRegex.test(userEmail.value) ||
        userPwConfirm.value !== userPw.value ||
        (!phoneRegex.test(userPhone.value) &&
          !phoneRegex2.test(userPhone.value))
      ) {
        setIsDone(false);
        return false;
      } else {
        setIsDone(true);
        try {
          const isOk = await createAccountMutation();
        } catch (e) {
          console.log(e);
        } finally {
        }
      }
    }
  };

  const handleCancel = () => {
    history.push("/joinagree");
  };

  const joinRef = useRef();

  useEffect(() => {
    try {
      isAgree = state.isAgree;
    } catch (e) {
      history.push("/");
    }

    if (
      !idRegex.test(userId.value) ||
      !pwRegex.test(userPw.value) ||
      !emailRegex.test(userEmail.value) ||
      userPwConfirm.value !== userPw.value ||
      (!phoneRegex.test(userPhone.value) && !phoneRegex2.test(userPhone.value))
    ) {
      setIsDone(false);
    } else {
      setIsDone(true);
    }
  });

  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      userId: userId.value,
      password: userPw.value,
      username: userName.value,
      email: userEmail.value,
      phoneNum: userPhone.value,
      address: userAddress.value
    }
  });

  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);
  return (
    <JoinPresenter
      globalText={globalText}
      userId={userId}
      idBlur={idBlur}
      userPw={userPw}
      pwBlur={pwBlur}
      userPwConfirm={userPwConfirm}
      pwCfBlur={pwCfBlur}
      userName={userName}
      userEmail={userEmail}
      emailBlur={emailBlur}
      userPhone={userPhone}
      phoneBlur={phoneBlur}
      userAddress={userAddress}
      handleCancel={handleCancel}
      handleSignUp={handleSignUp}
      msgId={msgId}
      msgPw={msgPw}
      msgPwcf={msgPwcf}
      msgPhone={msgPhone}
      msgEmail={msgEmail}
      isDone={isDone}
    ></JoinPresenter>
  );
};
