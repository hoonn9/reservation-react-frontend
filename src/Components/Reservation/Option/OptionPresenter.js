import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const Title = styled.h2`
  font-size: 36px;
  font-weight: 500;
  padding: 16px 0px;
  margin-bottom: 16px;
`;
const OptionBlockWrapper = styled.table`
  width: 100%;
  margin: 0 auto;
`;
const OptionBlockBody = styled.tbody``;
const OptionBlock = styled.tr`
  position: relative;
  border-top: solid 1px ${props => props.theme.superLiteGreyColor};
  border-bottom: solid 1px ${props => props.theme.superLiteGreyColor};
`;
const OptionName = styled.th`
  position: relative;
  background-color: ${props => props.theme.superLiteGreyColor};
  padding: 24px 16px;
  max-width: 58px;
  text-align: start;
`;
const OptionNameText = styled.label``;
const OptionContent = styled.td`
  position: relative;
  padding: 0px 8px;
  vertical-align: middle;
  word-wrap: break-word;
`;
const OptionInput = styled.input`
  padding: 16px 8px;
  width: 100%;
`;
const OptionSelect = styled.select`
  width: 100%;
  height: 48px;
  padding: 16px 8px;
`;
const OptionOption = styled.option``;
const NextButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;
const NextButton = styled.button`
  margin: 0 auto;
  padding: 12px 24px;
  background-color: ${props => props.theme.redColor};
  color: ${props => props.theme.whiteColor};
`;
export default ({ optionNextOnClick }) => {
  return (
    <Wrapper>
      <Title>옵션</Title>
      <OptionBlockWrapper>
        <OptionBlockBody>
          <OptionBlock>
            <OptionName>
              <OptionNameText>체크인 예정시간</OptionNameText>
            </OptionName>
            <OptionContent>
              <OptionSelect type="text">
                <OptionOption>15:00</OptionOption>
                <OptionOption>16:00</OptionOption>
                <OptionOption>17:00</OptionOption>
                <OptionOption>18:00</OptionOption>
                <OptionOption>19:00</OptionOption>
              </OptionSelect>
            </OptionContent>
            <OptionName>
              <OptionNameText>체크아웃 예정시간</OptionNameText>
            </OptionName>
            <OptionContent>
              <OptionSelect type="text">
                <OptionOption>15:00</OptionOption>
                <OptionOption>16:00</OptionOption>
                <OptionOption>17:00</OptionOption>
                <OptionOption>18:00</OptionOption>
                <OptionOption>19:00</OptionOption>
              </OptionSelect>
            </OptionContent>
          </OptionBlock>
          <OptionBlock>
            <OptionName>
              <OptionNameText>특별요청</OptionNameText>
            </OptionName>
            <OptionContent colSpan="3">
              <OptionInput placeholder="ex) 높은 층 제외, 조용한 객실" />
            </OptionContent>
          </OptionBlock>
        </OptionBlockBody>
      </OptionBlockWrapper>
      <NextButtonWrapper>
        <NextButton onClick={optionNextOnClick}>다음</NextButton>
      </NextButtonWrapper>
    </Wrapper>
  );
};
