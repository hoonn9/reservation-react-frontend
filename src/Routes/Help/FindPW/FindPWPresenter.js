import React from "react";
import styled from "styled-components";
import { MiniLoader } from "../../../Components/Icons";

const Container = styled.div``;

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
`;
const Title = styled.div`
  font-size: 42px;
  border-bottom: 2px black solid;
  padding: 8px 0px;
  margin-bottom: 32px;
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
`;
const PhoneInput = styled.input``;
const SendButtonWrapper = styled.div`
  text-align: center;
`;
const SendButton = styled.button`
  padding: 12px 24px;
  margin: 0px 32px;
`;
const DescriptionWrapper = styled.div`
  text-align: start;
  padding: 32px 0px;
`;
const AlretText = styled.div`
  text-align: center;
  color: ${props => props.theme.redColor};
  padding: 16px;
`;
const Description = styled.div`
  padding: 8px 0px;
  font-size: 14px;
  color: ${props => props.theme.darkGreyColor};
`;
const Text = styled.span`
  font-weight: 600;
  font-size: 18px;
  color: ${props => props.theme.blackColor};
`;
export default ({
  loading,
  userId,
  userEmail,
  secretCode,
  requestOnClick,
  confirmOnClick,
  alertValue,
  requestTrigger,
  successState
}) => {
  return (
    <Container>
      {successState ? (
        <Wrapper>
          <Title>비밀번호 찾기</Title>
          <PhoneWrapper>
            <AlretText>
              {"임시 발급된 비밀번호는 "}
              <Text>{successState}</Text>
              {" 입니다."}
            </AlretText>
          </PhoneWrapper>
          <Description>{"임시 발급 된 비밀번호로 로그인 하세요."}</Description>
          <Description>
            {"로그인에 성공하면 비밀번호를 변경하세요."}
          </Description>
        </Wrapper>
      ) : (
        <Wrapper>
          <Title>비밀번호 찾기</Title>
          <PhoneWrapper>
            <table>
              <PhoneTbody>
                <PhoneTr>
                  <PhoneTh>아이디</PhoneTh>
                  <PhoneTh>
                    {requestTrigger ? (
                      <PhoneInput
                        onChange={userId.onChange}
                        value={userId.value}
                        disabled
                      />
                    ) : (
                      <PhoneInput
                        onChange={userId.onChange}
                        value={userId.value}
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
              <SendButton onClick={confirmOnClick}>인증</SendButton>
            ) : (
              <SendButton onClick={requestOnClick}>전송</SendButton>
            )}
          </SendButtonWrapper>
          <DescriptionWrapper>
            <Description>
              {"· 가입할 때 등록한 아아디와 이메일을 입력하세요."}
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
