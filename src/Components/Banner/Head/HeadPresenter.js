import React from "react";
import styled from "styled-components";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";

const Wrapper = styled.div`
  max-width: 66%;
  margin: 0 auto;
`;
const TopWrapper = styled.div`
  position: relative;
`;
const Title = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-size: 36px;
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
`;
export default () => {
  return (
    <Wrapper>
      <TopWrapper>
        <Title>EVENT</Title>
        <SubButton>
          <AddBoxOutlinedIcon style={{ width: "42px", height: "42px" }} />
        </SubButton>
        <TabWrapper>
          {[...Array(3)].map((e, i) => {
            return <TabColumn>{i}</TabColumn>;
          })}
        </TabWrapper>
      </TopWrapper>
    </Wrapper>
  );
};
