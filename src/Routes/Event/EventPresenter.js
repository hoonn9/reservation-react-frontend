import React from "react";
import styled from "styled-components";
import TableView from "../../Components/TableView";
const Container = styled.div`
  position: relative;
  padding: 0;
  max-width: 1280px;
  margin: 0 auto;
`;

const Title = styled.div`
  display: inline-block;
  font-size: 46px;
  color: #333;
  font-weight: normal;
`;
const CountWrapper = styled.div`
  display: block;
  margin-top: 30px;
`;

const CountText = styled.div`
  display: inline-block;
  font-size: 20px;
  color: #333;
`;

const CountNumText = styled.div`
  display: inline-block;
  font-size: 20px;
  color: #da291c;
  font-weight: 700;
`;

export default ({ data, globalText }) => {
  return (
    <Container>
      <Title>{globalText.text_event}</Title>
      <CountWrapper>
        <CountNumText>{data.seeEvent.length}</CountNumText>
        <CountText>{globalText.text_count}</CountText>
      </CountWrapper>
      <TableView divide={3} view="event" data={data} />
    </Container>
  );
};
