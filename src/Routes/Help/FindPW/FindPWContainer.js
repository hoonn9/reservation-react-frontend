import React, { useState } from "react";
import FindPWPresenter from "./FindPWPresenter";
import useInput from "../../../Hooks/useInput";
import { useMutation } from "@apollo/react-hooks";
import { REQUEST_FIND_PW, CONFIRM_FIND_PW } from "../../../SharedQueries";

export default () => {
  const userId = useInput("");
  const userEmail = useInput("");
  const secretCode = useInput("");
  const [loading, setLoading] = useState(false);
  const [successState, setSuccessState] = useState(false);
  const [requestTrigger, setRequestTrigger] = useState(false);
  const [alertValue, setAlertValue] = useState("");
  const [requestFindPwMutation] = useMutation(REQUEST_FIND_PW, {
    variables: { userId: userId.value, email: userEmail.value }
  });
  const [confirmFindPwMutation] = useMutation(CONFIRM_FIND_PW, {
    variables: {
      userId: userId.value,
      email: userEmail.value,
      secret: secretCode.value
    }
  });
  const requestOnClick = async () => {
    setLoading(true);
    if (userId.value !== "" && userEmail.value !== "") {
      try {
        const {
          data: { requestFindPW }
        } = await requestFindPwMutation();
        if (requestFindPW) {
          setRequestTrigger(true);
          setAlertValue("인증 코드가 전송되었습니다.");
        } else {
          setAlertValue(
            "입력하신 아이디와 이메일이 일치하는 정보를 찾을 수 없습니다."
          );
        }
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setAlertValue(
          "입력하신 아이디와 이메일이 일치하는 정보를 찾을 수 없습니다."
        );
        return null;
      }
    } else {
      setAlertValue(
        "입력하신 아이디와 이메일이 일치하는 정보를 찾을 수 없습니다."
      );
      setLoading(false);
    }
  };

  const confirmOnClick = async () => {
    setLoading(true);
    try {
      const {
        data: { confirmFindPW }
      } = await confirmFindPwMutation();
      if (confirmFindPW !== "") {
        setSuccessState(confirmFindPW);
        setLoading(false);
      } else {
        setAlertValue("인증 코드가 일치하지 않습니다.");
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setAlertValue("인증 코드가 일치하지 않습니다.");
      return null;
    }
  };

  return (
    <div className="body-content">
      <FindPWPresenter
        loading={loading}
        userId={userId}
        userEmail={userEmail}
        secretCode={secretCode}
        requestOnClick={requestOnClick}
        confirmOnClick={confirmOnClick}
        alertValue={alertValue}
        requestTrigger={requestTrigger}
        successState={successState}
      />
    </div>
  );
};
