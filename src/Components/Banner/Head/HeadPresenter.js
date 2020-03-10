import React from "react";
import styled from "styled-components";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";

const Wrapper = styled.div`
  max-width: 75%;
  margin: 0 auto;
  margin-top: 16px;
  margin-bottom: 16px;
`;
const TopWrapper = styled.div`
  position: relative;
`;
const Title = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-size: 38px;
  font-weight: bold;
  margin-right: 16px;
`;
const SubButton = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
const TabWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 12px;
  right: 0;
`;
const TabColumn = styled.div`
  display: inline-block;
  border: 1px solid #000000;
  padding: 8px;
  margin-left: 8px;
  cursor: pointer;
`;
export default ({ eventArray, setCurrentItem, seeEvent }) => {
  var eventTypes = new Set([]);
  for (const event of seeEvent) {
    eventTypes.add(event.eventType);
  }
  return (
    <Wrapper>
      <TopWrapper>
        <Title>EVENT</Title>
        <SubButton>
          <AddBoxOutlinedIcon
            style={{ width: "42px", height: "42px", verticalAlign: "middle" }}
          />
        </SubButton>
        <TabWrapper>
          {Array.from(eventTypes).map((eventType, i) => {
            return (
              <TabColumn
                key={i}
                onClick={() => {
                  setCurrentItem(eventType);
                }}
              >
                {eventType}
              </TabColumn>
            );
          })}
        </TabWrapper>
      </TopWrapper>
    </Wrapper>
  );
};
