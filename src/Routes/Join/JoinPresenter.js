import styled from "styled-components";
import React from "react";
import { Logo } from "../../Components/Icons";
import Input from "../../Components/Input";
import Popup from "reactjs-popup";

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

const PopupContent = styled.div``;

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
  handleSuccess
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
              <JoinActiveButton onClick={handleSignUp}>
                {globalText.text_join}
              </JoinActiveButton>
            ) : (
              <JoinButton onClick={() => null}>
                {globalText.text_join}
              </JoinButton>
            )}
          </JoinWrapper>
          <Popup
            open={popupTrigger}
            modal
            closeOnDocumentClick
            onClose={isSuccess ? handleSuccess : popupInit}
          >
            <PopupContent>
              {isSuccess
                ? globalText.text_join_success
                : globalText.text_join_error}{" "}
            </PopupContent>
          </Popup>
        </Wrapper>
      </Container>
    </>
  );
};
