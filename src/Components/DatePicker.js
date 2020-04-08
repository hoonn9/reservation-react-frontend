import React, { forwardRef } from "react";
import styled from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import "./datePicker.css";
import { addDate } from "../Utils";
const Input = styled.input`
  color: ${(props) => props.theme.blackColor};
  background-color: transparent;
  border: 0;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  border-bottom: 1.5px ${(props) => props.theme.blackColor} solid;
  text-align: ${(props) => props.textAlign};
`;

const InputRef = forwardRef((props, ref) => {
  return (
    <Input
      textAlign={props.textAlign}
      onClick={props.onClick}
      value={props.value}
      type="text"
      readOnly={true}
      ref={ref}
    />
  );
});
const popperModifiers = {
  offset: {
    enabled: true,
    offset: "5px, 10px",
  },
  preventOverflow: {
    enabled: true,
    escapeWithReference: false,
    boundariesElement: "viewport",
  },
};
export const CustomStartInput = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  startDay,
  textAlign,
}) => {
  registerLocale("ko", ko);
  const onChange = (date) => {
    // 체크인 날짜가 체크아웃 날짜보다 멀 때
    if (date >= endDate) {
      setEndDate(addDate(date, 1));
    } else {
    }
    setStartDate(date);
  };
  return (
    <DatePicker
      customInput={<InputRef textAlign={textAlign} />}
      selected={startDate}
      onChange={onChange}
      selectsStart
      minDate={new Date()}
      startDate={startDate}
      endDate={endDate}
      dateFormat={`MM월 dd일 (${startDay})`}
      locale="ko"
      popperPlacement="bottom-start"
      popperModifiers={popperModifiers}
    />
  );
};

export const CustomEndInput = ({
  startDate,
  setEndDate,
  endDate,
  endDay,
  textAlign,
  reset = () => null,
}) => {
  registerLocale("ko", ko);
  const minDate = addDate(startDate, 1);
  const onChange = (date) => {
    setEndDate(date);
    reset();
  };
  return (
    <DatePicker
      customInput={<InputRef textAlign={textAlign} />}
      selected={endDate}
      onChange={onChange}
      selectsEnd
      startDate={startDate}
      endDate={endDate}
      minDate={minDate}
      dateFormat={`MM월 dd일 (${endDay})`}
      locale="ko"
      popperPlacement="bottom-end"
      popperModifiers={popperModifiers}
    />
  );
};
