import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: inline-block;
  line-height: 1;
  width: 100%;
`;
const CbInput = styled.input`
  width: 25px;
  height: 25px;
  vertical-align: middle;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 300;
  vertical-align: middle;
`;

const Button = ({ name, text, checked, onClick }) => (
  <Container>
    <Label>
      <CbInput
        name={name}
        type="checkbox"
        onClick={onClick}
        checked={checked}
        onChange={() => null}
      />
      {text}
    </Label>
  </Container>
);

Button.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired
};

export default Button;
