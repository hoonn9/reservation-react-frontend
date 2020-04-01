import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.button`
  width: 100%;
  height: ${props => `${props.height}px`};
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  background-color: ${props => props.theme.blueColor};
  text-align: center;
  font-size: 14px;
  cursor: pointer;
`;

const Button = ({ height = 50, text, onClick, loading = false }) => {
  if (loading) {
    return <Container height={height}>{text}</Container>;
  } else {
    return (
      <Container height={height} onClick={onClick}>
        {text}
      </Container>
    );
  }
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
