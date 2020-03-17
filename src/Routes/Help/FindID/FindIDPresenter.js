import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
`;
const Title = styled.div`
  font-size: 42px;
  border-bottom: 2px black solid;
  padding: 8px 0px;
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
  padding: 8px 16px;
`;
const DescriptionWrapper = styled.div`
  text-align: start;
  padding: 32px 0px;
`;

const Description = styled.div`
  padding: 8px 0px;
  font-size: 14px;
  color: ${props => props.theme.darkGreyColor};
`;
export default () => {
  return (
    <Container>
      <Wrapper>
        <Title>아이디 찾기</Title>
        <PhoneWrapper>
          <table>
            <PhoneTbody>
              <PhoneTr>
                <PhoneTh>이름</PhoneTh>
                <PhoneTh>
                  <PhoneInput />
                </PhoneTh>
              </PhoneTr>
              <PhoneTr>
                <PhoneTh>이메일 주소</PhoneTh>
                <PhoneTh>
                  <PhoneInput />
                </PhoneTh>
              </PhoneTr>
            </PhoneTbody>
          </table>
        </PhoneWrapper>
        <SendButtonWrapper>
          <SendButton>인증하기</SendButton>
        </SendButtonWrapper>
        <DescriptionWrapper>
          <Description>
            {"· 가입할 때 등록한 이름과 이메일을 입력하세요."}
          </Description>
          <Description>
            {"· 전송된 이메일에서 인증번호를 받아 입력하세요."}
          </Description>
        </DescriptionWrapper>
      </Wrapper>
    </Container>
  );
};
