import React from "react";
import InfoPresenter from "./InfoPresenter";
const emailRegex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^[0-9]{3}[0-9]{4}[0-9]{4}$/;
export default ({
  globalText,
  infoToggle,
  infoRef,
  agreeChecked,
  setReserveUserName,
  setReserveUserSex,
  setReserveUserPhone,
  setReserveUserEmail,
  setGuestUserName,
  setGuestUserSex,
  setGuestUserPhone,
  setGuestUserEmail,
  reserveUserPhoneError,
  reserveUserEmailError,
  guestUserPhoneError,
  guestUserEmailError,
  setReserveUserPhoneError,
  setReserveUserEmailError,
  setGuestUserPhoneError,
  setGuestUserEmailError
}) => {
  const validBlur = (regex, value, alert, setAlert) => {
    if (value !== "") {
      !regex.test(value) ? setAlert(alert) : setAlert("");
    }
  };
  return (
    <>
      <input
        ref={infoRef}
        style={{ width: "0px", height: "0px", border: "none" }}
      />
      {infoToggle ? (
        <InfoPresenter
          globalText={globalText}
          infoToggle={infoToggle}
          agreeChecked={agreeChecked}
          setReserveUserName={setReserveUserName}
          setReserveUserSex={setReserveUserSex}
          setReserveUserPhone={setReserveUserPhone}
          setReserveUserEmail={setReserveUserEmail}
          setGuestUserName={setGuestUserName}
          setGuestUserSex={setGuestUserSex}
          setGuestUserPhone={setGuestUserPhone}
          setGuestUserEmail={setGuestUserEmail}
          reserveUserPhoneError={reserveUserPhoneError}
          reserveUserEmailError={reserveUserEmailError}
          guestUserPhoneError={guestUserPhoneError}
          guestUserEmailError={guestUserEmailError}
          setReserveUserPhoneError={setReserveUserPhoneError}
          setReserveUserEmailError={setReserveUserEmailError}
          setGuestUserPhoneError={setGuestUserPhoneError}
          setGuestUserEmailError={setGuestUserEmailError}
          validBlur={validBlur}
          emailRegex={emailRegex}
          phoneRegex={phoneRegex}
        />
      ) : null}
    </>
  );
};
