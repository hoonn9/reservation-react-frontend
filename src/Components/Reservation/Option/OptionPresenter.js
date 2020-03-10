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
  cursor: pointer;
`;
export default ({
  globalText,
  optionNextOnClick,
  setCheckInTime,
  setCheckOutTime,
  setOptionRequest
}) => {
  return (
    <Wrapper>
      <Title>{globalText.text_option}</Title>
      <OptionBlockWrapper>
        <OptionBlockBody>
          <OptionBlock>
            <OptionName>
              <OptionNameText>
                {globalText.text_option_expect_check_in}
              </OptionNameText>
            </OptionName>
            <OptionContent>
              <OptionSelect
                type="text"
                onChange={e => setCheckInTime(e.target.value)}
              >
                <OptionOption>15:00</OptionOption>
                <OptionOption>16:00</OptionOption>
                <OptionOption>17:00</OptionOption>
                <OptionOption>18:00</OptionOption>
                <OptionOption>19:00</OptionOption>
                <OptionOption>20:00</OptionOption>
                <OptionOption>21:00~</OptionOption>
              </OptionSelect>
            </OptionContent>
            <OptionName>
              <OptionNameText>
                {globalText.text_option_expect_check_out}
              </OptionNameText>
            </OptionName>
            <OptionContent>
              <OptionSelect
                type="text"
                onChange={e => setCheckOutTime(e.target.value)}
              >
                <OptionOption>08:00</OptionOption>
                <OptionOption>09:00</OptionOption>
                <OptionOption>10:00</OptionOption>
                <OptionOption>11:00</OptionOption>
                <OptionOption>12:00</OptionOption>
              </OptionSelect>
            </OptionContent>
          </OptionBlock>
          <OptionBlock>
            <OptionName>
              <OptionNameText>{globalText.text_option_request}</OptionNameText>
            </OptionName>
            <OptionContent colSpan="3">
              <OptionInput
                placeholder={globalText.text_option_request_placeholder}
                onChange={e => setOptionRequest(e.target.value)}
              />
            </OptionContent>
          </OptionBlock>
        </OptionBlockBody>
      </OptionBlockWrapper>
      <NextButtonWrapper>
        <NextButton onClick={optionNextOnClick}>
          {globalText.text_next}
        </NextButton>
      </NextButtonWrapper>
    </Wrapper>
  );
};
