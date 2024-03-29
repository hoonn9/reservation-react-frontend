import React from "react";
import styled from "styled-components";
import { MiniLoader } from "../../../Components/Icons";
import Title from "../../../Components/Title";
import Button from "../../../Components/Button";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 210px;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const PhoneWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0px;
`;
const PhoneTbody = styled.tbody``;
const PhoneTr = styled.tr`
  padding: 8px;
`;
const PhoneTh = styled.th`
  padding: 8px;
  text-align: start;
`;
const PhoneInput = styled.input`
  padding: 8px;
`;
const SendButtonWrapper = styled.div`
  width: 80px;
  margin: 0 auto;
`;
const DescriptionWrapper = styled.div`
  text-align: start;
  padding: 32px 0px;
`;
const AlretText = styled.div`
  text-align: center;
  color: ${(props) => props.theme.redColor};
  padding: 16px;
`;
const Description = styled.div`
  padding: 8px 0px;
  font-size: 14px;
  color: ${(props) => props.theme.darkGreyColor};
`;
const Text = styled.span`
  font-weight: 600;
  font-size: 18px;
  color: ${(props) => props.theme.blackColor};
`;
export default ({
  platform,
  loading,
  userName,
  userEmail,
  secretCode,
  requestOnClick,
  confirmOnClick,
  alertValue,
  requestTrigger,
  successState,
}) => {
  return (
    <Container>
      {successState ? (
        <Wrapper>
          <Title platform={platform} text="아이디 찾기" />
          <PhoneWrapper>
            <AlretText>
              {"찾으시는 아이디는 "}
              <Text>{successState}</Text>
              {" 입니다."}
            </AlretText>
          </PhoneWrapper>
        </Wrapper>
      ) : (
        <Wrapper>
          <Title platform={platform} text="아이디 찾기" />
          <PhoneWrapper>
            <table>
              <PhoneTbody>
                <PhoneTr>
                  <PhoneTh>이름</PhoneTh>
                  <PhoneTh>
                    {requestTrigger ? (
                      <PhoneInput
                        onChange={userName.onChange}
                        value={userName.value}
                        disabled
                      />
                    ) : (
                      <PhoneInput
                        onChange={userName.onChange}
                        value={userName.value}
                      />
                    )}
                  </PhoneTh>
                </PhoneTr>
                <PhoneTr>
                  <PhoneTh>이메일 주소</PhoneTh>
                  <PhoneTh>
                    {requestTrigger ? (
                      <PhoneInput
                        onChange={userEmail.onChange}
                        value={userEmail.value}
                        disabled
                      />
                    ) : (
                      <PhoneInput
                        onChange={userEmail.onChange}
                        value={userEmail.value}
                      />
                    )}
                  </PhoneTh>
                </PhoneTr>
                {requestTrigger ? (
                  <PhoneTr style={{ padding: "32px" }}>
                    <PhoneTh>인증 코드</PhoneTh>
                    <PhoneTh>
                      <PhoneInput
                        onChange={secretCode.onChange}
                        value={secretCode.value}
                      />
                    </PhoneTh>
                  </PhoneTr>
                ) : null}
              </PhoneTbody>
            </table>
          </PhoneWrapper>
          {loading ? <MiniLoader /> : null}
          <AlretText>{alertValue}</AlretText>
          <SendButtonWrapper>
            {requestTrigger ? (
              <Button
                height={40}
                onClick={confirmOnClick}
                loading={loading}
                text={"인증"}
              />
            ) : (
              <Button
                height={40}
                onClick={requestOnClick}
                loading={loading}
                text={"전송"}
              />
            )}
          </SendButtonWrapper>
          <DescriptionWrapper>
            <Description>
              {"· 가입할 때 등록한 이름과 이메일을 입력하세요."}
            </Description>
            <Description>
              {"· 전송된 이메일에서 인증 코드를 받아 입력하세요."}
            </Description>
          </DescriptionWrapper>
        </Wrapper>
      )}
    </Container>
  );
};
