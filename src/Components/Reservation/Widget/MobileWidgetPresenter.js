import React from "react";
import styled from "styled-components";
import { CustomStartInput, CustomEndInput } from "../../DatePicker";
import { Link } from "react-router-dom";
import NumberPicker from "../../NumberPicker";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
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
  width: 100%;
  padding: 16px;
`;

const SubTitle = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.blackColor};
  line-height: 1.25;
  padding: 4px 0px;
`;

const DateWrapper = styled.div``;
const PickerWrapper = styled.div`
  display: inline-block;
  width: 100%;
  &:last-child {
    text-align: end;
  }
`;
const IconWrapper = styled.div`
  width: 100%;
  text-align: center;
`;
const CountWrapper = styled.div`
  padding: 8px 0px;
`;
const CountPickerWrapper = styled.div`
  display: inline-block;
  width: 33%;
`;
const CountSubTitle = styled.h1`
  font-size: 14px;
  color: ${(props) => props.theme.blackColor};
  line-height: 1.25;
  padding: 4px 0px;
  text-align: center;
`;
const ButtonWrapper = styled.div`
  text-align: right;
  padding-top: 8px;
`;
const SearchButton = styled.button`
  position: relative;
  padding: 12px 16px;
  background-color: ${(props) => props.theme.redColor};
  color: ${(props) => props.theme.whiteColor};
`;
const InputWrapper = styled.div`
  width: 40%;
`;
const StartInputWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`;
const EndInputWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
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
              <StartInputWrapper>
                <InputWrapper>
                  <CustomStartInput
                    startDate={startDate}
                    endDate={endDate}
                    setStartDate={setStartDate}
                    setEndDate={setEndDate}
                    startDay={startDay}
                  />
                </InputWrapper>
              </StartInputWrapper>
            </PickerWrapper>
            <IconWrapper>
              <SyncAltIcon style={{ width: "24px", height: "24px" }} />
            </IconWrapper>
            <PickerWrapper>
              <SubTitle>{globalText.text_check_out}</SubTitle>
              <EndInputWrapper>
                <InputWrapper>
                  <CustomEndInput
                    startDate={startDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                    endDay={endDay}
                    textAlign="end"
                  />
                </InputWrapper>
              </EndInputWrapper>
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
