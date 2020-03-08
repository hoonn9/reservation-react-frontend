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

export default ({ infoToggle }) => {
  return (
    <Container>
      <Wrapper>
        <Title>추가 정보</Title>
        <InfoFieldSet>
          <InfoLegend>예약자 정보</InfoLegend>
          <InfoBlockWrapper>
            <InfoBlockBody>
              <InfoBlock>
                <InfoName>
                  <InfoNameText>이름</InfoNameText>
                </InfoName>
                <InfoContent>
                  <InfoInput placeholder="성명" />
                  <InfoSelect>
                    <InfoOption>남</InfoOption>
                    <InfoOption>여</InfoOption>
                  </InfoSelect>
                </InfoContent>
              </InfoBlock>
              <InfoBlock>
                <InfoName>
                  <InfoNameText>휴대폰 번호</InfoNameText>
                </InfoName>
                <InfoContent>
                  <InfoInput
                    placeholder="-를 제외하고 입력해주세요."
                    style={{ width: "320px" }}
                  />
                </InfoContent>
              </InfoBlock>
              <InfoBlock>
                <InfoName>
                  <InfoNameText>이메일</InfoNameText>
                </InfoName>
                <InfoContent>
                  <InfoInput
                    placeholder="이메일 주소"
                    style={{ width: "320px" }}
                  />
                </InfoContent>
              </InfoBlock>
            </InfoBlockBody>
          </InfoBlockWrapper>
        </InfoFieldSet>
        <InfoFieldSet>
          <InfoLegend>투숙자 정보</InfoLegend>
          <InfoBlockWrapper>
            <InfoBlockBody>
              <InfoBlock>
                <InfoName>
                  <InfoNameText>이름</InfoNameText>
                </InfoName>
                <InfoContent>
                  <InfoInput placeholder="성명" />
                  <InfoSelect>
                    <InfoOption>남</InfoOption>
                    <InfoOption>여</InfoOption>
                  </InfoSelect>
                </InfoContent>
              </InfoBlock>
              <InfoBlock>
                <InfoName>
                  <InfoNameText>휴대폰 번호</InfoNameText>
                </InfoName>
                <InfoContent>
                  <InfoInput
                    placeholder="-를 제외하고 입력해주세요."
                    style={{ width: "320px" }}
                  />
                </InfoContent>
              </InfoBlock>
              <InfoBlock>
                <InfoName>
                  <InfoNameText>이메일</InfoNameText>
                </InfoName>
                <InfoContent>
                  <InfoInput
                    placeholder="이메일 주소"
                    style={{ width: "320px" }}
                  />
                </InfoContent>
              </InfoBlock>
            </InfoBlockBody>
          </InfoBlockWrapper>
        </InfoFieldSet>
        <InfoFieldSet>
          <InfoLegend>카드 정보</InfoLegend>
          <InfoBlockWrapper>
            <InfoBlockBody>
              <InfoBlock>
                <InfoName>
                  <InfoNameText>카드 종류</InfoNameText>
                </InfoName>
                <InfoContent>
                  <InfoSelect style={{ width: "120px" }}>
                    <InfoOption>비씨카드</InfoOption>
                    <InfoOption>국민카드</InfoOption>
                    <InfoOption>신한카드</InfoOption>
                    <InfoOption>하나카드</InfoOption>
                    <InfoOption>농협카드</InfoOption>
                  </InfoSelect>
                </InfoContent>
              </InfoBlock>
              <InfoBlock>
                <InfoName>
                  <InfoNameText>카드 번호</InfoNameText>
                </InfoName>
                <InfoContent>
                  <InfoInput placeholder="" style={{ width: "120px" }} />
                  <InfoInput placeholder="" style={{ width: "120px" }} />
                  <InfoInput placeholder="" style={{ width: "120px" }} />
                  <InfoInput placeholder="" style={{ width: "120px" }} />
                </InfoContent>
              </InfoBlock>
              <InfoBlock>
                <InfoName>
                  <InfoNameText>이메일</InfoNameText>
                </InfoName>
                <InfoContent>
                  <InfoInput
                    placeholder="이메일 주소"
                    style={{ width: "320px" }}
                  />
                </InfoContent>
              </InfoBlock>
            </InfoBlockBody>
          </InfoBlockWrapper>
        </InfoFieldSet>
      </Wrapper>
    </Container>
  );
};
