import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 120px;
  padding-left: 16px;
  font-size: 14px;
`;

export default ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};
