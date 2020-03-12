import React from "react";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  max-width: 75%;
  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 32px;
`;
const TopWrapper = styled.div`
  position: relative;
`;
const Title = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-size: 42px;
  font-weight: 500;
  margin-right: 8px;
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
  padding: 8px;
  margin-left: 8px;
  font-size: 21px;
  cursor: pointer;
`;

const TabActiveColumn = styled(TabColumn)`
  color: ${props => props.theme.blackColor};
  font-weight: 500;
`;

const TabInActiveColumn = styled(TabColumn)`
  color: ${props => props.theme.darkGreyColor};
  font-weight: 500;
`;

export default ({ globalText, currentItem, setCurrentItem, seeEvent }) => {
  var eventTypes = new Set([]);
  for (const event of seeEvent) {
    eventTypes.add(event.eventType);
  }
  return (
    <Wrapper>
      <TopWrapper>
        <Title>{globalText.text_event}</Title>
        <Link to="/event">
          <SubButton>
            <AddIcon
              style={{ width: "36px", height: "36px", verticalAlign: "middle" }}
            />
          </SubButton>
        </Link>
        <TabWrapper>
          {Array.from(eventTypes).map((eventType, i) => {
            return currentItem === eventType ? (
              <TabActiveColumn
                key={i}
                onClick={() => {
                  setCurrentItem(eventType);
                }}
              >
                {eventType}
              </TabActiveColumn>
            ) : (
              <TabInActiveColumn
                key={i}
                onClick={() => {
                  setCurrentItem(eventType);
                }}
              >
                {eventType}
              </TabInActiveColumn>
            );
          })}
        </TabWrapper>
      </TopWrapper>
    </Wrapper>
  );
};
