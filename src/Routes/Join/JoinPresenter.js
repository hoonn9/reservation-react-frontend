import styled from "styled-components";
import React from "react";
import { Logo } from "../../Components/Icons";
import Input from "../../Components/Input";
import Popup from "reactjs-popup";
import ReactLoading from "react-loading";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
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
  outline: 0;
  border: 0;
  color: white;
  font-weight: 600;
  margin-top: 48px;
  margin-left: 32px;
  margin-right: 32px;
  background-color: ${props => props.theme.GreyColor};
  text-align: center;
  font-size: 14px;
`;

const JoinActiveButton = styled.button`
  width: 100%;
  height: 50px;
  border: 0;
  outline: 0;
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

const PopupContent = styled.div`
  padding: 0px 16px;
`;
const PopupTitle = styled.div`
  font-size: 21px;
  font-weight: 600;
  padding: 16px 0px;
`;
const PopupButtonWrapper = styled.div`
  text-align: center;
  padding: 32px 0px 16px 0px;
`;
const PopupButton = styled.button`
  font-size: 15px;
  padding: 8px 16px;
`;

export default ({
  globalText,
  userId,
  idBlur,
  userPw,
  pwBlur,
  userPwConfirm,
  pwCfBlur,
  userName,
  userEmail,
  emailBlur,
  userPhone,
  phoneBlur,
  userAddress,
  handleCancel,
  handleSignUp,
  msgId,
  msgPw,
  msgPwcf,
  msgPhone,
  msgEmail,
  isDone,
  isSuccess,
  popupTrigger,
  popupInit,
  handleSuccess,
  btnActive
}) => {
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
            onChange={userPwConfirm.onChange}
            value={userPwConfirm.value}
            placeholder=""
            type="password"
            onBlur={pwCfBlur}
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
            placeholder={globalText.text_join_phone_placeholder}
          />
          <Msg>{msgPhone}</Msg>
          <Text>{globalText.text_address}</Text>
          <JoinInput
            onChange={userAddress.onChange}
            value={userAddress.value}
            placeholder=""
          />
          <JoinWrapper>
            <JoinActiveButton onClick={handleCancel}>
              {globalText.text_cancel}
            </JoinActiveButton>
            {isDone ? (
              btnActive ? (
                <JoinActiveButton onClick={handleSignUp}>
                  {globalText.text_join}
                </JoinActiveButton>
              ) : (
                <JoinActiveButton disabled>
                  {globalText.text_join}
                </JoinActiveButton>
              )
            ) : (
              <JoinButton onClick={() => null} disabled>
                {globalText.text_join}
              </JoinButton>
            )}
          </JoinWrapper>

          {!btnActive ? (
            <JoinWrapper>
              <ReactLoading
                type="bubbles"
                color="#000000"
                height={"30px"}
                width={"50px"}
              />
            </JoinWrapper>
          ) : (
            <div></div>
          )}

          <Popup
            open={popupTrigger}
            modal
            closeOnDocumentClick
            onClose={isSuccess ? handleSuccess : popupInit}
          >
            <PopupContent>
              <PopupTitle>{globalText.text_alert}</PopupTitle>
              {isSuccess
                ? globalText.text_join_success
                : globalText.text_join_error}
              <PopupButtonWrapper>
                <PopupButton onClick={() => popupInit()}>
                  {globalText.text_close}
                </PopupButton>
              </PopupButtonWrapper>
            </PopupContent>
          </Popup>
        </Wrapper>
      </Container>
    </>
  );
};
