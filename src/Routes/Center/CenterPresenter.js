import React from "react";
import styled from "styled-components";
import SpreadRow from "../../Components/SpreadRow";
import { centerList } from "../../Components/CenterList";
const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  border: 1px ${(props) => props.theme.liteGreyColor} solid;
`;

export default () => {
  return (
    <Container>
      <Wrapper>
        {centerList.map((e, i) => {
          return <SpreadRow key={i} title={e.title} content={e.content} />;
        })}
      </Wrapper>
    </Container>
  );
};
