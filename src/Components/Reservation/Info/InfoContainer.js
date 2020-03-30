import React from "react";
import InfoPresenter from "./InfoPresenter";
import MobileInfoPresenter from "./MobileInfoPresenter";
import Title from "../../Title";
import { globalText } from "../../../GlobalText";
import { useLazyQuery } from "@apollo/react-hooks";
import { ME } from "../../../Routes/MyPage/MyPageQueries";
import useCheckbox from "../../../Hooks/useCheckbox";
const emailRegex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^[0-9]{3}[0-9]{4}[0-9]{4}$/;
const RefStyle = { width: "0px", height: "0px", border: "none" };
export default ({
  platform,
  isLoggedIn,
  infoToggle,
  infoRef,
  agreeChecked,
  reserveUserName,
  reserveUserSex,
  reserveUserPhone,
  reserveUserEmail,
  guestUserName,
  guestUserSex,
  guestUserPhone,
  guestUserEmail
}) => {
  const validBlur = (regex, value, alert, setAlert) => {
    if (value !== "") {
      !regex.test(value) ? setAlert(alert) : setAlert("");
    }
  };
  const [me] = useLazyQuery(ME, {
    onCompleted: data => {
      console.log(data);
    }
  });
  const reserveCopy = useCheckbox();
  const copyOnClick = () => {
    reserveCopy.setChecked(!reserveCopy.checked);
  };
  return (
    <>
      <span ref={infoRef} style={RefStyle} />
      {infoToggle ? (
        <>
          <Title platform={platform} text={globalText.text_add_info} />
          {platform === "desktop" ? (
            <InfoPresenter
              isLoggedIn={isLoggedIn}
              copyOnClick={copyOnClick}
              agreeChecked={agreeChecked}
              validBlur={validBlur}
              emailRegex={emailRegex}
              phoneRegex={phoneRegex}
              reserveUserName={reserveUserName}
              reserveUserSex={reserveUserSex}
              reserveUserPhone={reserveUserPhone}
              reserveUserEmail={reserveUserEmail}
              guestUserName={guestUserName}
              guestUserSex={guestUserSex}
              guestUserPhone={guestUserPhone}
              guestUserEmail={guestUserEmail}
            />
          ) : (
            <MobileInfoPresenter
              isLoggedIn={isLoggedIn}
              copyOnClick={copyOnClick}
              agreeChecked={agreeChecked}
              validBlur={validBlur}
              emailRegex={emailRegex}
              phoneRegex={phoneRegex}
              reserveUserName={reserveUserName}
              reserveUserSex={reserveUserSex}
              reserveUserPhone={reserveUserPhone}
              reserveUserEmail={reserveUserEmail}
              guestUserName={guestUserName}
              guestUserSex={guestUserSex}
              guestUserPhone={guestUserPhone}
              guestUserEmail={guestUserEmail}
            />
          )}
        </>
      ) : null}
    </>
  );
};
