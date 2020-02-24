import React from "react";
import styled from "styled-components";
import Head from "./Head";
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default () => {
  return (
    <Wrapper>
      <Head />
    </Wrapper>
  );
};
