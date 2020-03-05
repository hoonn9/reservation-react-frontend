import React from "react";
import styled from "styled-components";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  display: inline-block;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    outline: none;
  }
  color: transparent;
  text-shadow: 0 0 0 ${props => props.theme.blackColor};
  text-align: center;
  margin: 0;
  width: 25px;
  height: 25px;
  border: 0;
  font-size: 18px;
`;

const Button = styled.button`
  display: inline-block;
  background-color: transparent;
`;

export default ({ value, setValue, min, max }) => {
  const minusOnClick = () => {
    if (value > min) {
      setValue(value - 1);
    }
  };
  const plusOnClick = () => {
    if (value < max) {
      setValue(value + 1);
    }
  };
  return (
    <Wrapper>
      <Button onClick={minusOnClick}>
        <RemoveIcon />
      </Button>
      <Input type="number" value={value} onChange={() => null} readonly />
      <Button onClick={plusOnClick}>
        <AddIcon />
      </Button>
    </Wrapper>
  );
};
