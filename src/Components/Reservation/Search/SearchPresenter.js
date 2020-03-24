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

const CustomDatePicker = styled(DatePicker)`
  width: 90%;
  font-size: 20px;
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
  setSubCount,
  searchOnClick,
  reset
}) => {
  registerLocale("ko", ko);
  return (
    <Container>
      <Wrapper>
        <WidgetWrapper>
          <Title></Title>

          <DateWrapper>
            <PickerWrapper>
              <SubTitle>{globalText.text_check_in}</SubTitle>
              <CustomDatePicker
                selected={startDate}
                onChange={date => {
                  setStartDate(date);
                  reset();
                }}
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
                onChange={date => {
                  setEndDate(date);
                  reset();
                }}
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
                callback={reset}
              />
            </CountPickerWrapper>
            <CountPickerWrapper>
              <CountSubTitle>{globalText.text_adult}</CountSubTitle>
              <NumberPicker
                value={userCount}
                setValue={setUserCount}
                min={1}
                max={typeCount * 2}
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
              <SearchButton onClick={searchOnClick}>
                {globalText.text_search}
              </SearchButton>
            </Link>
          </ButtonWrapper>
        </WidgetWrapper>
      </Wrapper>
    </Container>
  );
};
