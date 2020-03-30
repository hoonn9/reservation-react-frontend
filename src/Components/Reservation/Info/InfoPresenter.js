import React from "react";
import styled from "styled-components";
import Checkbox from "../../Checkbox";
import { globalText } from "../../../GlobalText";

const Container = styled.div``;

const InfoFieldSet = styled.fieldset`
  width: 100%;
  margin: 0 auto;
  padding: 36px 0px;
`;
const InfoLegendWrapper = styled.div`
  display: block;
  width: 100%;
`;
const InfoLegend = styled.legend`
  width: 100%;
  font-size: 24px;
  font-weight: 500;
  padding: 16px 0px;
  margin-bottom: 8px;
  border-bottom: solid 1px ${props => props.theme.darkGreyColor};
`;
const InfoCheckboxWrapper = styled.div`
  text-align: end;
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
  isLoggedIn,
  reserveCopy,
  copyOnClick,
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
                      onChange={reserveUserSex.onChange}
                      value={reserveUserSex.value}
                    >
                      <InfoOption value={globalText.text_man}>
                        {globalText.text_man}
                      </InfoOption>
                      <InfoOption value={globalText.text_man}>
                        {globalText.text_woman}
                      </InfoOption>
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
                      style={{ width: "320px" }}
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
                    value={guestUserSex.value}
                    onChange={guestUserSex.onChange}
                  >
                    <InfoOption value={globalText.text_man}>
                      {globalText.text_man}
                    </InfoOption>
                    <InfoOption value={globalText.text_woman}>
                      {globalText.text_woman}
                    </InfoOption>
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
                    style={{ width: "320px" }}
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
