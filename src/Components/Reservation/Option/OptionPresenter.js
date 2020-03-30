import React from "react";
import styled from "styled-components";
import { globalText } from "../../../GlobalText";

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
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
  optionNextOnClick,
  checkInOnChange,
  checkOutOnChange,
  optionRequest
}) => {
  return (
    <Wrapper>
      <OptionBlockWrapper>
        <OptionBlockBody>
          <OptionBlock>
            <OptionName>
              <OptionNameText>
                {globalText.text_option_expect_check_in}
              </OptionNameText>
            </OptionName>
            <OptionContent>
              <OptionSelect type="text" onChange={checkInOnChange}>
                <OptionOption value={15}>15:00</OptionOption>
                <OptionOption value={16}>16:00</OptionOption>
                <OptionOption value={17}>17:00</OptionOption>
                <OptionOption value={18}>18:00</OptionOption>
                <OptionOption value={19}>19:00</OptionOption>
                <OptionOption value={20}>20:00</OptionOption>
                <OptionOption value={21}>21:00~</OptionOption>
              </OptionSelect>
            </OptionContent>
            <OptionName>
              <OptionNameText>
                {globalText.text_option_expect_check_out}
              </OptionNameText>
            </OptionName>
            <OptionContent>
              <OptionSelect type="text" onChange={checkOutOnChange}>
                <OptionOption value={8}>08:00</OptionOption>
                <OptionOption value={9}>09:00</OptionOption>
                <OptionOption value={10}>10:00</OptionOption>
                <OptionOption value={11}>11:00</OptionOption>
                <OptionOption value={12}>12:00</OptionOption>
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
                onChange={optionRequest.onChange}
                value={optionRequest.value}
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
