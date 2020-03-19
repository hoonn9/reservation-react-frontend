import React, { useState } from "react";
import FindIDPresenter from "./FindIDPresenter";
import useInput from "../../../Hooks/useInput";
import { useMutation } from "@apollo/react-hooks";
import { REQUEST_FIND_ID, CONFIRM_FIND_ID } from "../../../SharedQueries";

export default () => {
  const userName = useInput("");
  const userEmail = useInput("");
  const secretCode = useInput("");
  const [loading, setLoading] = useState(false);
  const [successState, setSuccessState] = useState(false);
  const [requestTrigger, setRequestTrigger] = useState(false);
  const [alertValue, setAlertValue] = useState("");
  const [requestFindIdMutation] = useMutation(REQUEST_FIND_ID, {
    variables: { name: userName.value, email: userEmail.value }
  });
  const [confirmFindIdMutation] = useMutation(CONFIRM_FIND_ID, {
    variables: { email: userEmail.value, secret: secretCode.value }
  });
  const requestOnClick = async () => {
    setLoading(true);
    if (userName.value !== "" && userEmail.value !== "") {
      try {
        const {
          data: { requestFindID }
        } = await requestFindIdMutation();
        if (requestFindID) {
          setRequestTrigger(true);
          setAlertValue("인증 코드가 전송되었습니다.");
        } else {
          setAlertValue("입력하신 이름과 이메일을 찾을 수 없습니다.");
        }
        setLoading(false);
      } catch (e) {
        setAlertValue("입력하신 이름과 이메일을 찾을 수 없습니다.");
        setLoading(false);
        return null;
      }
    } else {
      setLoading(false);
      setAlertValue("입력하신 이름과 이메일을 찾을 수 없습니다.");
    }
  };

  const confirmOnClick = async () => {
    setLoading(true);
    try {
      const {
        data: { confirmFindID }
      } = await confirmFindIdMutation();
      if (confirmFindID !== "") {
        setSuccessState(confirmFindID);
        setLoading(false);
      } else {
        setAlertValue("인증 코드가 일치하지 않습니다.");
        setLoading(false);
      }
    } catch (e) {
      setAlertValue("인증 코드가 일치하지 않습니다.");
      setLoading(false);
      return null;
    }
  };
  return (
    <div className="body-content">
      <FindIDPresenter
        loading={loading}
        userName={userName}
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
