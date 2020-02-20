import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div``;

export default () => {
  return (
    <Container>
      <Wrapper>
        <div>home</div>
      </Wrapper>
    </Container>
  );
};
