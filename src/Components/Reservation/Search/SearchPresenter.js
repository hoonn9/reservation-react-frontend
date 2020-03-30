import React from "react";
import styled from "styled-components";
import { CustomStartInput, CustomEndInput } from "../../DatePicker";
import NumberPicker from "../../NumberPicker";
import { globalText } from "../../../GlobalText";
const Container = styled.div`
  position: relative;
  display: block;
  width: 100%;
`;

const Wrapper = styled.div`
  background-color: transparent;
`;

const WidgetWrapper = styled.div`
  background: ${props => props.theme.whiteColor};
  border: solid 1px ${props => props.theme.superLiteGreyColor};
  width: 100%;
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.25;
  padding: 8px 0px;
`;

const SubTitle = styled.h1`
  font-size: 16px;
  color: ${props => props.theme.blackColor};
  line-height: 1.25;
  padding: 8px 0px;
`;

const DateWrapper = styled.div``;
const PickerWrapper = styled.div`
  display: inline-block;
  width: 50%;
`;

const CountWrapper = styled.div`
  padding: 16px 0px;
`;
const CountPickerWrapper = styled.div`
  display: inline-block;
  width: 33.3333%;
`;
const CountSubTitle = styled.h1`
  font-size: 16px;
  color: ${props => props.theme.blackColor};
  line-height: 1.25;
  padding: 8px 0px;
  text-align: center;
`;
const ButtonWrapper = styled.div`
  text-align: center;
  padding-top: 16px;
`;
const SearchButton = styled.button`
  position: relative;
  padding: 12px 24px;
  background-color: ${props => props.theme.redColor};
  color: ${props => props.theme.whiteColor};
  cursor: pointer;
`;
const InputWrapper = styled.div`
  width: 80%;
`;
export default ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  startDay,
  endDay,
  userCount,
  typeCount,
  subCount,
  searchOnClick,
  reset
}) => {
  return (
    <Container>
      <Wrapper>
        <WidgetWrapper>
          <Title></Title>

          <DateWrapper>
            <PickerWrapper>
              <SubTitle>{globalText.text_check_in}</SubTitle>
              <InputWrapper>
                <CustomStartInput
                  startDate={startDate}
                  endDate={endDate}
                  setStartDate={setStartDate}
                  startDay={startDay}
                  reset={reset}
                />
              </InputWrapper>
            </PickerWrapper>
            <PickerWrapper>
              <SubTitle>{globalText.text_check_out}</SubTitle>
              <InputWrapper>
                <CustomEndInput
                  startDate={startDate}
                  endDate={endDate}
                  setEndDate={setEndDate}
                  endDay={endDay}
                  reset={reset}
                />
              </InputWrapper>
            </PickerWrapper>
          </DateWrapper>
          <CountWrapper>
            <CountPickerWrapper>
              <CountSubTitle>{globalText.text_type}</CountSubTitle>
              <NumberPicker
                value={typeCount.value}
                setValue={typeCount.setValue}
                min={1}
                max={5}
                callback={reset}
              />
            </CountPickerWrapper>
            <CountPickerWrapper>
              <CountSubTitle>{globalText.text_adult}</CountSubTitle>
              <NumberPicker
                value={userCount.value}
                setValue={userCount.setValue}
                min={1}
                max={typeCount.value * 2}
              />
            </CountPickerWrapper>
            <CountPickerWrapper>
              <CountSubTitle>{globalText.text_child}</CountSubTitle>
              <NumberPicker
                value={subCount.value}
                setValue={subCount.setValue}
                min={0}
                max={3}
              />
            </CountPickerWrapper>
          </CountWrapper>

          <ButtonWrapper>
            <SearchButton onClick={searchOnClick}>
              {globalText.text_search}
            </SearchButton>
          </ButtonWrapper>
        </WidgetWrapper>
      </Wrapper>
    </Container>
  );
};
