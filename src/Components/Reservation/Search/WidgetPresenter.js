import React from "react";
import styled from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import { Link } from "react-router-dom";
import ko from "date-fns/locale/ko";
import "../datePicker.css";
import NumberPicker from "../../NumberPicker";

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
  background: ${props => props.theme.liteWhiteColor};
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
  width: 480px;
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.25;
  padding: 8px 0px;
  color: ${props => props.theme.blackColor};
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
  width: 33%;
`;
const CountSubTitle = styled.h1`
  font-size: 16px;
  color: ${props => props.theme.blackColor};
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
  background-color: ${props => props.theme.redColor};
  color: ${props => props.theme.whiteColor};
`;

const CustomDatePicker = styled(DatePicker)`
  color: ${props => props.theme.blackColor};
  background-color: transparent;
  border: 0;
  width: 90%;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  padding: 6px 6px;
`;

export default ({
  startDate,
  startDay,
  setStartDate,
  endDate,
  endDay,
  setEndDate,
  globalText,
  userCount,
  setUserCount,
  typeCount,
  setTypeCount,
  subCount,
  setSubCount
}) => {
  registerLocale("ko", ko);
  return (
    <Container>
      <Wrapper>
        <WidgetWrpper>
          <Title></Title>

          <DateWrapper>
            <PickerWrapper>
              <SubTitle>{globalText.text_check_in}</SubTitle>
              <CustomDatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                dateFormat={`MM월 dd일 (${startDay})`}
                placeholderText="Click to select a date"
                locale="ko"
              />
            </PickerWrapper>
            <PickerWrapper>
              <SubTitle>{globalText.text_check_out}</SubTitle>
              <CustomDatePicker
                selected={endDate}
                onChange={date => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                dateFormat={`MM월 dd일 (${endDay})`}
                placeholderText="Click to select a date"
                locale="ko"
              />
            </PickerWrapper>
          </DateWrapper>
          <CountWrapper>
            <CountPickerWrapper>
              <CountSubTitle>{globalText.text_type}</CountSubTitle>
              <NumberPicker
                value={typeCount}
                setValue={setTypeCount}
                min={1}
                max={5}
              />
            </CountPickerWrapper>
            <CountPickerWrapper>
              <CountSubTitle>{globalText.text_adult}</CountSubTitle>
              <NumberPicker
                value={userCount}
                setValue={setUserCount}
                min={1}
                max={4}
              />
            </CountPickerWrapper>
            <CountPickerWrapper>
              <CountSubTitle>{globalText.text_child}</CountSubTitle>
              <NumberPicker
                value={subCount}
                setValue={setSubCount}
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
                  typeCount,
                  userCount,
                  subCount
                }
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
