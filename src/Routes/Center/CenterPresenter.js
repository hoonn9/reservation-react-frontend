import React from "react";
import styled from "styled-components";
import SpreadRow from "../../Components/SpreadRow";
import { centerList } from "../../Components/CenterList";
const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
`;

export default () => {
  return (
    <Container>
      <Wrapper>
        {centerList.map((e, i) => {
          return <SpreadRow title={e.title} content={e.content} />;
        })}
      </Wrapper>
    </Container>
  );
};
