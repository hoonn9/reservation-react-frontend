import React from "react";
import styled from "styled-components";
import TableView from "../../Components/TableView";
import Title from "../../Components/Title";
const Container = styled.div`
  position: relative;
  padding: 0;
  max-width: 1280px;
  margin: 0 auto;
`;
const CountWrapper = styled.div`
  display: block;
  padding: 0px 8px;
`;

const CountText = styled.div`
  display: inline-block;
  font-size: 20px;
  color: #333;
`;
const MobileCountText = styled.div`
  display: inline-block;
  font-size: 18px;
  color: #333;
`;

const CountNumText = styled.div`
  display: inline-block;
  font-size: 20px;
  color: #da291c;
  font-weight: 700;
`;
const MobileCountNumText = styled.div`
  display: inline-block;
  font-size: 18px;
  color: #da291c;
  font-weight: 700;
`;

export default ({ platform, data, globalText }) => {
  return (
    <Container>
      <Title platform={platform} text={globalText.text_event} />

      {platform === "desktop" ? (
        <>
          <CountWrapper>
            <CountNumText>{data.seeEvent.length}</CountNumText>
            <CountText>{globalText.text_count}</CountText>
          </CountWrapper>
          <TableView divide={3} view="event" data={data} />
        </>
      ) : (
        <>
          <CountWrapper>
            <MobileCountNumText>{data.seeEvent.length}</MobileCountNumText>
            <MobileCountText>{globalText.text_count}</MobileCountText>
          </CountWrapper>
          <TableView divide={1} view="event" data={data} />
        </>
      )}
    </Container>
  );
};
