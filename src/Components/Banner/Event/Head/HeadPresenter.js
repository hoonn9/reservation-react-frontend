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
const MobileWrapper = styled.div`
  max-width: 90%;
  margin: 0 auto;
  margin-top: 16px;
  padding: 16px 0px;
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
  padding: 0px 8px;
`;
const MobileTitle = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-size: 31px;
  font-weight: 500;
  margin-right: 4px;
`;
const SubButton = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
const TabWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 6px;
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
  border-bottom: 2px ${props => props.theme.redColor} solid;
`;

const TabInActiveColumn = styled(TabColumn)`
  color: ${props => props.theme.darkGreyColor};
  font-weight: 500;
`;
const MobileTabColumn = styled.div`
  display: inline-block;
  margin-left: 8px;
  padding: 8px 0px;
  font-size: 18px;
  cursor: pointer;
`;
const MobileTabActiveColumn = styled(MobileTabColumn)`
  color: ${props => props.theme.blackColor};
  font-weight: 500;
  border-bottom: 2px ${props => props.theme.redColor} solid;
`;

const MobileTabInActiveColumn = styled(MobileTabColumn)`
  color: ${props => props.theme.darkGreyColor};
  font-weight: 500;
`;

export default ({
  platform,
  globalText,
  currentItem,
  setCurrentItem,
  seeEvent,
  resetWrapper
}) => {
  var eventTypes = new Set([]);
  for (const event of seeEvent) {
    eventTypes.add(event.eventType);
  }
  return (
    <>
      {platform === "desktop" ? (
        <Wrapper>
          <TopWrapper>
            <Title>{globalText.text_event}</Title>

            <Link to="/event">
              <SubButton>
                <AddIcon
                  style={{
                    width: "36px",
                    height: "36px",
                    verticalAlign: "middle"
                  }}
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
                      resetWrapper();
                    }}
                  >
                    {eventType}
                  </TabActiveColumn>
                ) : (
                  <TabInActiveColumn
                    key={i}
                    onClick={() => {
                      setCurrentItem(eventType);
                      resetWrapper();
                    }}
                  >
                    {eventType}
                  </TabInActiveColumn>
                );
              })}
            </TabWrapper>
          </TopWrapper>
        </Wrapper>
      ) : (
        <MobileWrapper>
          <TopWrapper>
            <MobileTitle>{globalText.text_event}</MobileTitle>

            <Link to="/event">
              <SubButton>
                <AddIcon
                  style={{
                    width: "24px",
                    height: "24px",
                    verticalAlign: "middle"
                  }}
                />
              </SubButton>
            </Link>
            <TabWrapper>
              {Array.from(eventTypes).map((eventType, i) => {
                return currentItem === eventType ? (
                  <MobileTabActiveColumn
                    key={i}
                    onClick={() => {
                      setCurrentItem(eventType);
                      resetWrapper();
                    }}
                  >
                    {eventType}
                  </MobileTabActiveColumn>
                ) : (
                  <MobileTabInActiveColumn
                    key={i}
                    onClick={() => {
                      setCurrentItem(eventType);
                      resetWrapper();
                    }}
                  >
                    {eventType}
                  </MobileTabInActiveColumn>
                );
              })}
            </TabWrapper>
          </TopWrapper>
        </MobileWrapper>
      )}
    </>
  );
};
