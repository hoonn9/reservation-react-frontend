import React from "react";
import styled from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import { Link } from "react-router-dom";
import ko from "date-fns/locale/ko";
import "./datePicker.css";

const Container = styled.div`
  position: relative;
  display: block;
  width: 100%;
  z-index: 5;
  top: 250px;
`;

const Wrapper = styled.div`
  background-color: transparent;
  padding: 0px 32px 0px 32px;
`;

const WidgetWrpper = styled.div`
  background: ${props => props.theme.whiteColor};
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
  width: 440px;
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
  globalText
}) => {
  registerLocale("ko", ko);
  return (
    <Container>
      <Wrapper>
        <WidgetWrpper>
          <Title>지구 최강의 숙소와 즐길거리를 예약하세요!</Title>
          <SubTitle>룸</SubTitle>
          <DateWrapper>
            <PickerWrapper>
              <SubTitle>체크인</SubTitle>
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
              <SubTitle>체크아웃</SubTitle>
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
          <ButtonWrapper>
            <Link
              to={{
                pathname: "/reservation",
                state: {
                  checkIn: startDate.toISOString(),
                  checkOut: endDate.toISOString()
                }
              }}
            >
              <SearchButton>검색</SearchButton>
            </Link>
          </ButtonWrapper>
        </WidgetWrpper>
      </Wrapper>
    </Container>
  );
};
