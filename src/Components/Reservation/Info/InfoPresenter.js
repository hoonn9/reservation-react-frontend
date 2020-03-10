import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Title = styled.h2`
  font-size: 36px;
  font-weight: 500;
  padding: 16px 0px;
  margin-bottom: 16px;
`;
const InfoFieldSet = styled.fieldset`
  width: 100%;
  margin: 0 auto;
  padding: 36px 0px;
`;
const InfoLegend = styled.legend`
  font-size: 24px;
  font-weight: 500;
  padding: 16px 0px;
  display: block;
  width: 100%;
  margin-bottom: 8px;
  border-bottom: solid 1px ${props => props.theme.darkGreyColor};
`;
const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const InfoBlockWrapper = styled.table`
  width: 100%;
`;
const InfoBlockBody = styled.tbody``;
const InfoBlock = styled.tr`
  position: relative;
  border-top: solid 1px ${props => props.theme.superLiteGreyColor};
  border-bottom: solid 1px ${props => props.theme.superLiteGreyColor};
`;
const InfoName = styled.th`
  position: relative;
  background-color: ${props => props.theme.superLiteGreyColor};
  padding: 24px 16px;
  min-width: 58px;
  max-width: 58px;
  text-align: start;
`;
const InfoNameText = styled.label``;
const InfoContent = styled.td`
  position: relative;
  padding: 0px 8px;
  vertical-align: middle;
  word-wrap: break-word;
`;
const InfoInput = styled.input`
  padding: 16px 8px;
  vertical-align: middle;
  margin: 0px 16px 0px 0px;
`;
const InfoSelect = styled.select`
  vertical-align: middle;
  height: 48px;
  width: 72px;
`;
const InfoOption = styled.option``;
const InfoAgree = styled.input``;
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
        <Title>{globalText.text_add_info}</Title>
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
                    style={{ width: "320px" }}
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
                  <InvaildAlert>{reserveUserPhoneError}</InvaildAlert>
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
                    style={{ width: "320px" }}
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
                  <InvaildAlert>{reserveUserEmailError}</InvaildAlert>
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
                    style={{ width: "320px" }}
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
                  <InvaildAlert>{guestUserPhoneError}</InvaildAlert>
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
                    style={{ width: "320px" }}
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
                  <InvaildAlert>{guestUserEmailError}</InvaildAlert>
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
