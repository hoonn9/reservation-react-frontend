import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const InfoFieldSet = styled.fieldset`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 16px 0px;
`;
const InfoLegend = styled.legend`
  font-size: 21px;
  font-weight: 500;
  padding: 16px 8px;
  display: block;
  width: 100%;
  margin-bottom: 8px;
  border-bottom: solid 1px ${props => props.theme.darkGreyColor};
`;
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;
const InfoBlockWrapper = styled.table`
  position: relative;
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;
const InfoBlockBody = styled.tbody`
  width: 100%;
`;
const InfoBlock = styled.tr`
  position: relative;
  width: 100%;
  border-top: solid 1px ${props => props.theme.superLiteGreyColor};
  border-bottom: solid 1px ${props => props.theme.superLiteGreyColor};
`;
const InfoName = styled.td`
  position: relative;
  background-color: ${props => props.theme.superLiteGreyColor};
  width: 25%;
  padding: 16px 0px;
  text-align: center;
`;
const InfoNameText = styled.label`
  width: 100%;
  font-size: 14px;
`;
const InfoContent = styled.td`
  position: relative;
  width: 75%;
  padding: 0px 8px;
  vertical-align: middle;
  word-wrap: break-word;
`;
const InfoInput = styled.input`
  width: 70%;
  padding: 12px 8px;
  vertical-align: middle;
  margin: 0px 16px 0px 0px;
`;
const InfoSelect = styled.select`
  width: 20%;
  vertical-align: middle;
  padding: 12px 0px;
`;
const InfoOption = styled.option``;
const InfoAgree = styled.input`
  margin-left: 8px;
`;
const InvaildAlert = styled.div`
  padding: 8px;
  font-size: 14px;
  color: ${props => props.theme.redColor};
`;
export default ({
  infoToggle,
  globalText,
  agreeChecked,
  setAgreeChecked,
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
  setGuestUserEmailError,
  validBlur,
  emailRegex,
  phoneRegex
}) => {
  return (
    <Container>
      <Wrapper>
        <InfoFieldSet>
          <InfoLegend>{globalText.text_reserve_user_info}</InfoLegend>
          <InfoBlockWrapper>
            <InfoBlockBody>
              <InfoBlock>
                <InfoName>
                  <InfoNameText>{globalText.text_name}</InfoNameText>
                </InfoName>
                <InfoContent>
                  <InfoInput
                    placeholder={globalText.text_name}
                    onChange={e => setReserveUserName(e.target.value)}
                  />
                  <InfoSelect
                    defaultValue={globalText.text_man}
                    onChange={e => setReserveUserSex(e.target.value)}
                  >
                    <InfoOption>{globalText.text_man}</InfoOption>
                    <InfoOption>{globalText.text_woman}</InfoOption>
                  </InfoSelect>
                </InfoContent>
              </InfoBlock>
              <InfoBlock>
                <InfoName>
                  <InfoNameText>{globalText.text_phone_num}</InfoNameText>
                </InfoName>
                <InfoContent>
                  <InfoInput
                    placeholder={globalText.text_join_phone_placeholder}
                    onChange={e => setReserveUserPhone(e.target.value)}
                    onBlur={e =>
                      validBlur(
                        phoneRegex,
                        e.target.value,
                        globalText.text_phone_error,
                        setReserveUserPhoneError
                      )
                    }
                  />
                  {reserveUserPhoneError !== "" ? (
                    <InvaildAlert>{reserveUserPhoneError}</InvaildAlert>
                  ) : null}
                </InfoContent>
              </InfoBlock>
              <InfoBlock>
                <InfoName>
                  <InfoNameText>{globalText.text_email}</InfoNameText>
                </InfoName>
                <InfoContent>
                  <InfoInput
                    placeholder={
                      globalText.text_email + " " + globalText.text_address
                    }
                    onChange={e => setReserveUserEmail(e.target.value)}
                    onBlur={e =>
                      validBlur(
                        emailRegex,
                        e.target.value,
                        globalText.text_email_error,
                        setReserveUserEmailError
                      )
                    }
                  />
                  {reserveUserEmailError !== "" ? (
                    <InvaildAlert>{reserveUserEmailError}</InvaildAlert>
                  ) : null}
                </InfoContent>
              </InfoBlock>
            </InfoBlockBody>
          </InfoBlockWrapper>
        </InfoFieldSet>
        <InfoFieldSet>
          <InfoLegend>{globalText.text_guest_user_info}</InfoLegend>
          <InfoBlockWrapper>
            <InfoBlockBody>
              <InfoBlock>
                <InfoName>
                  <InfoNameText>{globalText.text_name}</InfoNameText>
                </InfoName>
                <InfoContent>
                  <InfoInput
                    placeholder={globalText.text_name}
                    onChange={e => setGuestUserName(e.target.value)}
                  />
                  <InfoSelect
                    defaultValue={globalText.text_man}
                    onChange={e => setGuestUserSex(e.target.value)}
                  >
                    <InfoOption>{globalText.text_man}</InfoOption>
                    <InfoOption>{globalText.text_woman}</InfoOption>
                  </InfoSelect>
                </InfoContent>
              </InfoBlock>
              <InfoBlock>
                <InfoName>
                  <InfoNameText>{globalText.text_phone_num}</InfoNameText>
                </InfoName>
                <InfoContent>
                  <InfoInput
                    placeholder={globalText.text_join_phone_placeholder}
                    onChange={e => setGuestUserPhone(e.target.value)}
                    onBlur={e =>
                      validBlur(
                        phoneRegex,
                        e.target.value,
                        globalText.text_phone_error,
                        setGuestUserPhoneError
                      )
                    }
                  />
                  {guestUserPhoneError !== "" ? (
                    <InvaildAlert>{guestUserPhoneError}</InvaildAlert>
                  ) : null}
                </InfoContent>
              </InfoBlock>
              <InfoBlock>
                <InfoName>
                  <InfoNameText>{globalText.text_email}</InfoNameText>
                </InfoName>
                <InfoContent>
                  <InfoInput
                    placeholder={
                      globalText.text_email + " " + globalText.text_address
                    }
                    onChange={e => setGuestUserEmail(e.target.value)}
                    onBlur={e =>
                      validBlur(
                        emailRegex,
                        e.target.value,
                        globalText.text_email_error,
                        setGuestUserEmailError
                      )
                    }
                  />
                  {guestUserEmailError !== "" ? (
                    <InvaildAlert>{guestUserEmailError}</InvaildAlert>
                  ) : null}
                </InfoContent>
              </InfoBlock>
            </InfoBlockBody>
          </InfoBlockWrapper>
        </InfoFieldSet>
        <InfoFieldSet>
          <InfoLegend>{globalText.text_agree}</InfoLegend>
          <InfoBlockWrapper>
            <InfoBlockBody>
              <InfoBlock>
                <InfoName>
                  <InfoNameText>{globalText.text_use_agree}</InfoNameText>
                </InfoName>
                <InfoContent>
                  <InfoNameText>{globalText.text_use_agree_text}</InfoNameText>
                  <InfoAgree type="checkbox" onChange={agreeChecked.onChange} />
                </InfoContent>
              </InfoBlock>
              <InfoBlock></InfoBlock>
            </InfoBlockBody>
          </InfoBlockWrapper>
        </InfoFieldSet>
      </Wrapper>
    </Container>
  );
};
