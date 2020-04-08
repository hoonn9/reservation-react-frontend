import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useInput from "../../Hooks/useInput";
import { globalText } from "../../GlobalText";
import JoinPresenter from "./JoinPresenter";
import { useMutation, useLazyQuery } from "@apollo/react-hooks";
import {
  CREATE_ACCOUNT,
  EXIST_ID,
  EXIST_EMAIL,
  EXIST_NICKNAME,
} from "./JoinQueries";

const idRegex = /^[a-z]{1}[a-z0-9]{4,19}$/;
const pwRegex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=-_]).*$/;
const emailRegex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//const phoneRegex = /^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/;
const phoneRegex = /^[0-9]{3}[0-9]{4}[0-9]{4}$/;
//const phoneConvertRegex = /^[0-9]{11}$/;
const nicknameRegex = /^[ㄱ-ㅎㅏ-ㅣ가-힣a-z0-9_-]{3,16}$/;

export default ({ platform }) => {
  let history = useHistory();
  let location = useLocation();
  let isAgree = null;
  try {
    isAgree = location.state.isAgree;
  } catch (e) {
    history.push("/");
  }

  const [isDone, setIsDone] = useState(false);

  const userId = useInput("");
  const [msgId, setMsgId] = useState("");
  const userPw = useInput("$");
  const [msgPw, setMsgPw] = useState("");
  const userPwConfirm = useInput("");
  const [msgPwcf, setMsgPwcf] = useState("");
  const userName = useInput("");
  const userNickName = useInput("");
  const [msgNickName, setMsgNickName] = useState("");
  const userEmail = useInput("");
  const [msgEmail, setMsgEmail] = useState("");
  const userPhone = useInput("");
  const [msgPhone, setMsgPhone] = useState("");
  const userAddress = useInput("");

  const [popupTrigger, setPopupTrigger] = useState(false);
  const [isSuccess, setIsSuccess] = useState("");
  const [btnActive, setBtnActive] = useState(true);

  const [idExist] = useLazyQuery(EXIST_ID, {
    onCompleted: (data) =>
      data.existUserId ? setMsgId(globalText.text_id_exist) : setMsgId(""),
  });

  const [emailExist] = useLazyQuery(EXIST_EMAIL, {
    onCompleted: (data) =>
      data.existUserEmail
        ? setMsgEmail(globalText.text_email_exist)
        : setMsgEmail(""),
  });

  const [nickNameExist] = useLazyQuery(EXIST_NICKNAME, {
    onCompleted: (data) =>
      data.existUserNickName
        ? setMsgNickName(globalText.text_nickname_exist)
        : setMsgNickName(""),
  });

  const idBlur = () => {
    if (!idRegex.test(userId.value)) {
      setMsgId(globalText.text_id_error);
    } else {
      setMsgId("");
      idExist({
        variables: {
          userId: userId.value,
        },
      });
    }
  };
  const pwBlur = () =>
    !pwRegex.test(userPw.value)
      ? setMsgPw(globalText.text_pw_error)
      : setMsgPw("");

  const emailBlur = () => {
    if (!emailRegex.test(userEmail.value)) {
      setMsgEmail(globalText.text_email_error);
    } else {
      setMsgEmail("");
      emailExist({
        variables: {
          email: userEmail.value,
        },
      });
    }
  };

  const nicknameBlur = () => {
    if (!nicknameRegex.test(userNickName.value)) {
      setMsgNickName(globalText.text_nickname_error);
    } else {
      setMsgNickName("");
      nickNameExist({
        variables: {
          nickname: userNickName.value,
        },
      });
    }
  };

  const pwCfBlur = () =>
    userPwConfirm.value !== userPw.value
      ? setMsgPwcf(globalText.text_pwcf_error)
      : setMsgPwcf("");

  const phoneBlur = () => {
    if (!phoneRegex.test(userPhone.value)) {
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
    const { value: nickname } = userNickName;
    //const { value: address } = userAddress;

    if (
      id === "" ||
      pw === "" ||
      pwcf === "" ||
      name === "" ||
      email === "" ||
      phone === "" ||
      nickname === ""
    ) {
      return false;
    } else {
      if (
        !idRegex.test(userId.value) ||
        !pwRegex.test(userPw.value) ||
        !emailRegex.test(userEmail.value) ||
        !nicknameRegex.test(nickname) ||
        userPwConfirm.value !== userPw.value ||
        !phoneRegex.test(userPhone.value)
      ) {
        setIsDone(false);
        return false;
      } else {
        setBtnActive(false);
        setIsDone(true);
        try {
          const {
            data: { createAccount },
          } = await createAccountMutation();

          if (createAccount) {
            setIsSuccess(true);
            setPopupTrigger(true);
          } else {
          }
        } catch (e) {
          //가입 실패 팝업 set
          setIsSuccess(false);
          setBtnActive(true);
          setPopupTrigger(true);
        } finally {
        }
      }
    }
  };

  const handleCancel = () => {
    history.push("/joinagree");
  };

  const handleSuccess = () => {
    history.push("/login");
  };

  const popupInit = () => {
    setPopupTrigger(false);
  };

  useEffect(() => {
    if (
      !idRegex.test(userId.value) ||
      !pwRegex.test(userPw.value) ||
      !emailRegex.test(userEmail.value) ||
      !nicknameRegex.test(userNickName.value) ||
      userPwConfirm.value !== userPw.value ||
      !phoneRegex.test(userPhone.value)
    ) {
      setIsDone(false);
    } else {
      setIsDone(true);
    }
  }, [userId, userPw, userEmail, userPwConfirm, userPhone, userNickName]);

  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      userId: userId.value,
      password: userPw.value,
      username: userName.value,
      nickname: userNickName.value,
      email: userEmail.value,
      phoneNum: userPhone.value,
      address: userAddress.value,
      isAgree: isAgree,
    },
  });

  return (
    <div className="body-content">
      <JoinPresenter
        platform={platform}
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
        userNickName={userNickName}
        nicknameBlur={nicknameBlur}
        userAddress={userAddress}
        handleCancel={handleCancel}
        handleSignUp={handleSignUp}
        msgId={msgId}
        msgPw={msgPw}
        msgPwcf={msgPwcf}
        msgPhone={msgPhone}
        msgEmail={msgEmail}
        msgNickName={msgNickName}
        isDone={isDone}
        isSuccess={isSuccess}
        popupTrigger={popupTrigger}
        popupInit={popupInit}
        handleSuccess={handleSuccess}
        btnActive={btnActive}
      />
    </div>
  );
};
