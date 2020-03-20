import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
  width: 100%;
`;
const Input = styled.input`
  border: 0;
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.bgColor};
  height: 35px;
  font-size: 12px;
  padding: 0px 15px;
`;

const Alert = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.theme.redColor};
  padding: 0px 12px;
`;

const Container = ({
  placeholder,
  required = true,
  value,
  onChange,
  type,
  className,
  onBlur,
  onKeyPress,
  alertMsg
}) => {
  return (
    <Wrapper>
      <Input
        className={className}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        type={type}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
      />
      <Alert>{alertMsg}</Alert>
    </Wrapper>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  onblur: PropTypes.func,
  alertMsg: PropTypes.string
};

export default Container;
