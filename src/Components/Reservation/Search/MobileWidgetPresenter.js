import React from "react";
import styled from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import { Link } from "react-router-dom";
import ko from "date-fns/locale/ko";
import "../datePicker.css";
import NumberPicker from "../../NumberPicker";
import SyncAltIcon from "@material-ui/icons/SyncAlt";

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
  width: 100%;
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
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.blackColor};
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
  color: ${props => props.theme.blackColor};
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
  background-color: ${props => props.theme.redColor};
  color: ${props => props.theme.whiteColor};
`;

const CustomDatePicker = styled(DatePicker)`
  color: ${props => props.theme.blackColor};
  background-color: transparent;
  border: 0;
  width: 40%;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  border-bottom: 1.5px ${props => props.theme.blackColor} solid;
`;
const CustomEndDatePicker = styled(DatePicker)`
  color: ${props => props.theme.blackColor};
  background-color: transparent;
  border: 0;
  width: 40%;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-align: end;
  border-bottom: 1.5px ${props => props.theme.blackColor} solid;
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
                popperPlacement="bottom-start"
                popperModifiers={{
                  offset: {
                    enabled: true,
                    offset: "5px, 10px"
                  },
                  preventOverflow: {
                    enabled: true,
                    escapeWithReference: false,
                    boundariesElement: "viewport"
                  }
                }}
              />
            </PickerWrapper>
            <IconWrapper>
              <SyncAltIcon style={{ width: "24px", height: "24px" }} />
            </IconWrapper>
            <PickerWrapper>
              <SubTitle>{globalText.text_check_out}</SubTitle>
              <CustomEndDatePicker
                selected={endDate}
                onChange={date => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                dateFormat={`MM월 dd일 (${endDay})`}
                placeholderText="Click to select a date"
                locale="ko"
                popperPlacement="bottom-end"
                popperModifiers={{
                  offset: {
                    enabled: true,
                    offset: "5px, 10px"
                  },
                  preventOverflow: {
                    enabled: true,
                    escapeWithReference: false,
                    boundariesElement: "viewport"
                  }
                }}
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
