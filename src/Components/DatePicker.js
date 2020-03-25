import React, { forwardRef } from "react";
import styled from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import "./datePicker.css";
const Input = styled.input`
  color: ${props => props.theme.blackColor};
  background-color: transparent;
  border: 0;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  border-bottom: 1.5px ${props => props.theme.blackColor} solid;
  text-align: ${props => props.textAlign};
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

export const CustomStartInput = ({
  startDate,
  setStartDate,
  endDate,
  startDay,
  textAlign
}) => {
  registerLocale("ko", ko);
  return (
    <DatePicker
      customInput={<InputRef textAlign={textAlign} />}
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
  );
};

export const CustomEndInput = ({
  startDate,
  setEndDate,
  endDate,
  endDay,
  textAlign,
  reset = () => null
}) => {
  registerLocale("ko", ko);
  return (
    <DatePicker
      customInput={<InputRef textAlign={textAlign} />}
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
  );
};
