import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 120px;
`;
const Wrapper = styled.div``;
export default ({ data }) => {
  return (
    <Container>
      <Wrapper>{data.me.username}님 반갑습니다.</Wrapper>
    </Container>
  );
};
