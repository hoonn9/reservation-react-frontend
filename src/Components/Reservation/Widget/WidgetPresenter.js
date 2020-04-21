import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CustomStartInput, CustomEndInput } from "../../DatePicker";
import NumberPicker from "../../NumberPicker";
import { globalText } from "../../../GlobalText";

const Container = styled.div`
  position: relative;
  display: block;
  width: 100%;
  z-index: 5;
`;

const Wrapper = styled.div`
  background-color: transparent;
`;

const WidgetWrpper = styled.div`
  background: ${(props) => props.theme.liteWhiteColor};
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
  width: 480px;
  padding: 16px;
`;

const SubTitle = styled.h1`
  font-size: 16px;
  color: ${(props) => props.theme.blackColor};
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
  width: 33%;
`;
const CountSubTitle = styled.h1`
  font-size: 16px;
  color: ${(props) => props.theme.blackColor};
  line-height: 1.25;
  padding: 8px 0px;
  text-align: center;
`;
const ButtonWrapper = styled.div`
  text-align: right;
  padding-top: 16px;
`;
const SearchButton = styled.button`
  position: relative;
  padding: 12px 16px;
  background-color: ${(props) => props.theme.redColor};
  color: ${(props) => props.theme.whiteColor};
`;
const InputWrapper = styled.div`
  width: 60%;
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
}) => {
  return (
    <Container>
      <Wrapper>
        <WidgetWrpper>
          <DateWrapper>
            <PickerWrapper>
              <SubTitle>{globalText.text_check_in}</SubTitle>

              <InputWrapper>
                <CustomStartInput
                  startDate={startDate}
                  endDate={endDate}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                  startDay={startDay}
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
                />
              </InputWrapper>
            </PickerWrapper>
          </DateWrapper>
          <CountWrapper>
            <CountPickerWrapper>
              <CountSubTitle>{globalText.text_room}</CountSubTitle>
              <NumberPicker
                value={typeCount.value}
                setValue={typeCount.setValue}
                min={1}
                max={5}
              />
            </CountPickerWrapper>
            <CountPickerWrapper>
              <CountSubTitle>{globalText.text_adult}</CountSubTitle>
              <NumberPicker
                value={userCount.value}
                setValue={userCount.setValue}
                min={1}
                max={4}
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
            <Link
              to={{
                pathname: "/reservation",
                state: {
                  checkIn: startDate.toISOString(),
                  checkOut: endDate.toISOString(),
                  typeCount: typeCount.value,
                  userCount: userCount.value,
                  subCount: subCount.value,
                },
              }}
            >
              <SearchButton>{globalText.text_search}</SearchButton>
            </Link>
          </ButtonWrapper>
        </WidgetWrpper>
      </Wrapper>
    </Container>
  );
};
