import React from "react";
import styled from "styled-components";
import Checkbox from "../../Checkbox";
import { globalText } from "../../../GlobalText";

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
const InfoLegendWrapper = styled.div`
  display: block;
  width: 100%;
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
const InfoCheckboxWrapper = styled.div`
  text-align: end;
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
  copyOnClick,
  reserveCopy,
  isLoggedIn,
  agreeChecked,
  reserveUserName,
  reserveUserSex,
  reserveUserPhone,
  reserveUserEmail,
  guestUserName,
  guestUserSex,
  guestUserPhone,
  guestUserEmail,
  validBlur,
  emailRegex,
  phoneRegex
}) => {
  return (
    <Container>
      <Wrapper>
        {!isLoggedIn ? (
          <InfoFieldSet>
            <InfoLegendWrapper>
              <InfoLegend>{globalText.text_reserve_user_info}</InfoLegend>
            </InfoLegendWrapper>
            <InfoBlockWrapper>
              <InfoBlockBody>
                <InfoBlock>
                  <InfoName>
                    <InfoNameText>{globalText.text_name}</InfoNameText>
                  </InfoName>
                  <InfoContent>
                    <InfoInput
                      placeholder={globalText.text_name}
                      onChange={reserveUserName.onChange}
                      value={reserveUserName.value}
                    />
                    <InfoSelect
                      defaultValue={globalText.text_man}
                      onChange={reserveUserSex.onChange}
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
                      onChange={reserveUserPhone.onChange}
                      value={reserveUserPhone.value}
                      onBlur={e =>
                        validBlur(
                          phoneRegex,
                          e.target.value,
                          globalText.text_phone_error,
                          reserveUserPhone.setError
                        )
                      }
                    />
                    {reserveUserPhone.error !== "" ? (
                      <InvaildAlert>{reserveUserPhone.error}</InvaildAlert>
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
                      onChange={reserveUserEmail.onChange}
                      value={reserveUserEmail.value}
                      onBlur={e =>
                        validBlur(
                          emailRegex,
                          e.target.value,
                          globalText.text_email_error,
                          reserveUserEmail.setError
                        )
                      }
                    />
                    {reserveUserEmail.error !== "" ? (
                      <InvaildAlert>{reserveUserEmail.error}</InvaildAlert>
                    ) : null}
                  </InfoContent>
                </InfoBlock>
              </InfoBlockBody>
            </InfoBlockWrapper>
          </InfoFieldSet>
        ) : null}
        <InfoFieldSet>
          <InfoLegendWrapper>
            <InfoLegend>{globalText.text_guest_user_info}</InfoLegend>
            <InfoCheckboxWrapper>
              <Checkbox
                text="예약자와 동일"
                onClick={copyOnClick}
                checked={reserveCopy.checked}
              />
            </InfoCheckboxWrapper>
          </InfoLegendWrapper>
          <InfoBlockWrapper>
            <InfoBlockBody>
              <InfoBlock>
                <InfoName>
                  <InfoNameText>{globalText.text_name}</InfoNameText>
                </InfoName>
                <InfoContent>
                  <InfoInput
                    placeholder={globalText.text_name}
                    onChange={guestUserName.onChange}
                    value={guestUserName.value}
                  />
                  <InfoSelect
                    defaultValue={globalText.text_man}
                    onChange={guestUserSex.onChange}
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
                    onChange={guestUserPhone.onChange}
                    value={guestUserPhone.value}
                    onBlur={e =>
                      validBlur(
                        phoneRegex,
                        e.target.value,
                        globalText.text_phone_error,
                        guestUserPhone.setError
                      )
                    }
                  />
                  {guestUserPhone.error !== "" ? (
                    <InvaildAlert>{guestUserPhone.error}</InvaildAlert>
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
                    onChange={guestUserEmail.onChange}
                    value={guestUserEmail.value}
                    onBlur={e =>
                      validBlur(
                        emailRegex,
                        e.target.value,
                        globalText.text_email_error,
                        guestUserEmail.setError
                      )
                    }
                  />
                  {guestUserEmail.error !== "" ? (
                    <InvaildAlert>{guestUserEmail.error}</InvaildAlert>
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
