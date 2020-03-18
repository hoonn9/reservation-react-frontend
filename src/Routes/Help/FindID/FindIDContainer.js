import React, { useState } from "react";
import FindIDPresenter from "./FindIDPresenter";
import useInput from "../../../Hooks/useInput";
import { useMutation } from "@apollo/react-hooks";
import { REQUEST_SECRET, CONFIRM_SECRET } from "../../../SharedQueries";

export default () => {
  const userName = useInput("");
  const userEmail = useInput("");
  const secretCode = useInput("");
  const [successState, setSuccessState] = useState(false);
  const [requestTrigger, setRequestTrigger] = useState(false);
  const [alertValue, setAlertValue] = useState("");
  const [requestSecretMutation] = useMutation(REQUEST_SECRET, {
    variables: { name: userName.value, email: userEmail.value }
  });
  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: { email: userEmail.value, secret: secretCode.value }
  });
  const requestOnClick = async () => {
    if (userName.value !== "" && userEmail.value !== "") {
      try {
        const {
          data: { requestSecret }
        } = await requestSecretMutation();
        if (requestSecret) {
          setRequestTrigger(true);
          setAlertValue("인증 코드가 전송되었습니다.");
        }
      } catch (e) {
        return null;
      }
    } else {
      setAlertValue("입력하신 이름과 이메일을 찾을 수 없습니다.");
    }
  };

  const confirmOnClick = async () => {
    try {
      const {
        data: { confirmSecret }
      } = await confirmSecretMutation();
      if (confirmSecret !== "") {
        setSuccessState(confirmSecret);
      } else {
        setAlertValue("인증 코드가 일치하지 않습니다.");
      }
    } catch (e) {
      return null;
    }
  };
  return (
    <div className="body-content">
      <FindIDPresenter
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
