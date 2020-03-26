import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../../Components/Input";
import useInput from "../../../Hooks/useInput";
import { useMutation } from "@apollo/react-hooks";
import { CHANGE_PW } from "../MyPageQueries";
import { MiniLoader } from "../../../Components/Icons";
import GlobalText from "../../../GlobalText";
import Title from "../../../Components/Title";
const Container = styled.div``;
const Wrapper = styled.div``;

const InfoTable = styled.table`
  width: 75%;
  margin: 0 auto;
`;

const MobileInfoTable = styled.table`
  width: 100%;
  margin: 0 auto;
  font-size: 15px;
`;

const InfoBox = styled.tbody``;
const InfoRow = styled.tr`
  height: 80px;
  border-bottom: 1px ${props => props.theme.liteGreyColor} solid;
`;
const InfoRowLabel = styled.th`
  width: 30%;
  text-align: center;
  vertical-align: middle;
`;
const InfoRowContent = styled.td`
  width: 30%;
  vertical-align: middle;
  font-weight: 600;
`;
const InfoRowButton = styled.button`
  padding: 8px 16px;
`;

const InputContainer = styled.div``;
const InputWrapper = styled.div`
  padding: 16px 0px;
`;
const MobileInputWrapper = styled.div`
  padding: 8px 0px;
`;
const InputLabel = styled.label`
  display: inline-block;
  width: 30%;
  font-weight: 500;
`;
const MobileInputLabel = styled.label`
  display: block;
  font-weight: 500;
  padding: 16px 0px;
`;
const AlertText = styled.div`
  font-weight: 500;
  color: ${props => props.theme.redColor};
  text-align: end;
`;
const InputInner = styled.div`
  position: relative;
  display: inline-block;
  width: 70%;
`;
const MobileInputInner = styled.div`
  position: relative;
  display: block;
`;
const pwRegex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=-_]).*$/;

export default ({ platform, data: { me } }) => {
  const globalText = GlobalText();
  const [pwToggle, setPwToggle] = useState(false);
  const currentPw = useInput("");
  const newPw = useInput("");
  const [newPwAlert, setNewPwAlert] = useState("");
  const newConfirmPw = useInput("");
  const [newConfirmPwAlert, setNewConfirmPwAlert] = useState("");
  const [pwChangeMutation] = useMutation(CHANGE_PW, {
    variables: { currentPw: currentPw.value, newPw: newPw.value }
  });
  const [pwAlert, setPwAlert] = useState("");
  const [pwInputAlert, setPwInputAlert] = useState("");
  const [pwLoading, setPwLoading] = useState(false);

  const pwChangeOnClick = async () => {
    setPwLoading(true);
    try {
      if (
        currentPw.value !== "" &&
        newPw.value !== "" &&
        newConfirmPw.value !== ""
      ) {
        const {
          data: { updatePW }
        } = await pwChangeMutation();

        if (updatePW) {
          setPwToggle(false);
          currentPw.setValue("");
          newPw.setValue("");
          newConfirmPw.setValue("");
          setPwAlert(globalText.text_pw_changed);
          setPwLoading(false);
        } else {
          setPwInputAlert(globalText.text_not_correct);
          setPwLoading(false);
        }
      } else {
        setPwInputAlert(globalText.text_not_correct);
        setPwLoading(false);
      }
    } catch (error) {
      setPwInputAlert(globalText.text_pw_change_error);
      setPwLoading(false);
      return null;
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title platform={platform} text={globalText.text_user_info} />
        {platform === "desktop" ? (
          <InfoTable>
            <InfoBox>
              <InfoRow>
                <InfoRowLabel>{globalText.text_id}</InfoRowLabel>
                <InfoRowContent>{me.userId}</InfoRowContent>
                <InfoRowContent></InfoRowContent>
              </InfoRow>
              {pwToggle ? (
                <InfoRow>
                  <InfoRowLabel>{globalText.text_pw}</InfoRowLabel>
                  <InfoRowContent colSpan={2}>
                    <InputContainer>
                      <InputWrapper>
                        <InputLabel>{globalText.text_current_pw}</InputLabel>
                        <InputInner>
                          <Input
                            type="password"
                            value={currentPw.value}
                            onChange={currentPw.onChange}
                          />
                        </InputInner>
                      </InputWrapper>
                      <InputWrapper>
                        <InputLabel>{globalText.text_new_pw}</InputLabel>
                        <InputInner>
                          <Input
                            type="password"
                            value={newPw.value}
                            onChange={newPw.onChange}
                            onBlur={() => {
                              if (pwRegex.test(newPw.value)) {
                                setNewPwAlert("");
                              } else {
                                setNewPwAlert(globalText.text_pw_error);
                              }
                            }}
                            alertMsg={newPwAlert}
                          />
                        </InputInner>
                      </InputWrapper>
                      <InputWrapper>
                        <InputLabel>
                          {globalText.text_new_pw_confirm}
                        </InputLabel>
                        <InputInner>
                          <Input
                            type="password"
                            value={newConfirmPw.value}
                            onChange={newConfirmPw.onChange}
                            onBlur={() => {
                              if (newPw.value === newConfirmPw.value) {
                                setNewConfirmPwAlert("");
                              } else {
                                setNewConfirmPwAlert(
                                  globalText.text_pwcf_error
                                );
                              }
                            }}
                            alertMsg={newConfirmPwAlert}
                          />
                        </InputInner>
                      </InputWrapper>
                      <AlertText>{pwInputAlert}</AlertText>
                      {pwLoading ? <MiniLoader /> : null}
                      <InputWrapper style={{ textAlign: "end" }}>
                        <InfoRowButton
                          style={{ marginRight: "16px" }}
                          onClick={() => setPwToggle(false)}
                        >
                          {globalText.text_cancel}
                        </InfoRowButton>
                        {pwLoading ? (
                          <InfoRowButton>
                            {globalText.text_confirm}
                          </InfoRowButton>
                        ) : (
                          <InfoRowButton onClick={pwChangeOnClick}>
                            {globalText.text_confirm}
                          </InfoRowButton>
                        )}
                      </InputWrapper>
                    </InputContainer>
                  </InfoRowContent>
                </InfoRow>
              ) : (
                <InfoRow>
                  <InfoRowLabel>{globalText.text_pw}</InfoRowLabel>
                  <InfoRowContent>
                    {globalText.text_pw_placeholder}
                    {pwAlert}
                  </InfoRowContent>
                  <InfoRowContent>
                    <InfoRowButton onClick={() => setPwToggle(true)}>
                      {globalText.text_change}
                    </InfoRowButton>
                  </InfoRowContent>
                </InfoRow>
              )}

              <InfoRow>
                <InfoRowLabel>{globalText.text_name}</InfoRowLabel>
                <InfoRowContent>{me.username}</InfoRowContent>
                <InfoRowContent></InfoRowContent>
              </InfoRow>
              <InfoRow>
                <InfoRowLabel>{globalText.text_username}</InfoRowLabel>
                <InfoRowContent>{me.nickname}</InfoRowContent>
                <InfoRowContent></InfoRowContent>
              </InfoRow>
              <InfoRow>
                <InfoRowLabel>{globalText.text_email}</InfoRowLabel>
                <InfoRowContent>{me.email}</InfoRowContent>
                <InfoRowContent></InfoRowContent>
              </InfoRow>
              <InfoRow>
                <InfoRowLabel>{globalText.text_phone_num}</InfoRowLabel>
                <InfoRowContent>{me.phoneNum}</InfoRowContent>
                <InfoRowContent></InfoRowContent>
              </InfoRow>
            </InfoBox>
          </InfoTable>
        ) : (
          <MobileInfoTable>
            <InfoBox>
              <InfoRow>
                <InfoRowLabel>{globalText.text_id}</InfoRowLabel>
                <InfoRowContent>{me.userId}</InfoRowContent>
                <InfoRowContent></InfoRowContent>
              </InfoRow>
              {pwToggle ? (
                <InfoRow>
                  <InfoRowLabel>{globalText.text_pw}</InfoRowLabel>
                  <InfoRowContent colSpan={2}>
                    <InputContainer>
                      <MobileInputWrapper>
                        <MobileInputLabel>
                          {globalText.text_current_pw}
                        </MobileInputLabel>
                        <MobileInputInner>
                          <Input
                            type="password"
                            value={currentPw.value}
                            onChange={currentPw.onChange}
                          />
                        </MobileInputInner>
                      </MobileInputWrapper>
                      <MobileInputWrapper>
                        <MobileInputLabel>
                          {globalText.text_new_pw}
                        </MobileInputLabel>
                        <MobileInputInner>
                          <Input
                            type="password"
                            value={newPw.value}
                            onChange={newPw.onChange}
                            onBlur={() => {
                              if (pwRegex.test(newPw.value)) {
                                setNewPwAlert("");
                              } else {
                                setNewPwAlert(globalText.text_pw_error);
                              }
                            }}
                            alertMsg={newPwAlert}
                          />
                        </MobileInputInner>
                      </MobileInputWrapper>
                      <MobileInputWrapper>
                        <MobileInputLabel>
                          {globalText.text_new_pw_confirm}
                        </MobileInputLabel>
                        <MobileInputInner>
                          <Input
                            type="password"
                            value={newConfirmPw.value}
                            onChange={newConfirmPw.onChange}
                            onBlur={() => {
                              if (newPw.value === newConfirmPw.value) {
                                setNewConfirmPwAlert("");
                              } else {
                                setNewConfirmPwAlert(
                                  globalText.text_pwcf_error
                                );
                              }
                            }}
                            alertMsg={newConfirmPwAlert}
                          />
                        </MobileInputInner>
                      </MobileInputWrapper>
                      <AlertText>{pwInputAlert}</AlertText>
                      {pwLoading ? <MiniLoader /> : null}
                      <MobileInputWrapper style={{ textAlign: "end" }}>
                        <InfoRowButton
                          style={{ marginRight: "16px" }}
                          onClick={() => setPwToggle(false)}
                        >
                          {globalText.text_cancel}
                        </InfoRowButton>
                        {pwLoading ? (
                          <InfoRowButton>
                            {globalText.text_confirm}
                          </InfoRowButton>
                        ) : (
                          <InfoRowButton onClick={pwChangeOnClick}>
                            {globalText.text_confirm}
                          </InfoRowButton>
                        )}
                      </MobileInputWrapper>
                    </InputContainer>
                  </InfoRowContent>
                </InfoRow>
              ) : (
                <InfoRow>
                  <InfoRowLabel>{globalText.text_pw}</InfoRowLabel>
                  <InfoRowContent>
                    {globalText.text_pw_placeholder}
                    {pwAlert}
                  </InfoRowContent>
                  <InfoRowContent>
                    <InfoRowButton onClick={() => setPwToggle(true)}>
                      {globalText.text_change}
                    </InfoRowButton>
                  </InfoRowContent>
                </InfoRow>
              )}

              <InfoRow>
                <InfoRowLabel>{globalText.text_name}</InfoRowLabel>
                <InfoRowContent>{me.username}</InfoRowContent>
                <InfoRowContent></InfoRowContent>
              </InfoRow>
              <InfoRow>
                <InfoRowLabel>{globalText.text_username}</InfoRowLabel>
                <InfoRowContent>{me.nickname}</InfoRowContent>
                <InfoRowContent></InfoRowContent>
              </InfoRow>
              <InfoRow>
                <InfoRowLabel>{globalText.text_email}</InfoRowLabel>
                <InfoRowContent>{me.email}</InfoRowContent>
                <InfoRowContent></InfoRowContent>
              </InfoRow>
              <InfoRow>
                <InfoRowLabel>{globalText.text_phone_num}</InfoRowLabel>
                <InfoRowContent>{me.phoneNum}</InfoRowContent>
                <InfoRowContent></InfoRowContent>
              </InfoRow>
            </InfoBox>
          </MobileInfoTable>
        )}
      </Wrapper>
    </Container>
  );
};
