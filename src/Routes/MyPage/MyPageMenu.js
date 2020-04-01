import React from "react";
import styled from "styled-components";
import { globalText } from "../../GlobalText";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
const MobileWrapper = styled.div`
  padding: 8px;
  background-color: ${props => props.theme.whiteColor};
  border: 1px solid ${props => props.theme.superLiteGreyColor};
`;
const MenuWrapper = styled.div`
  padding: 16px;
  background-color: ${props => props.theme.whiteColor};
  border: 1px solid ${props => props.theme.superLiteGreyColor};
`;
const Text = styled.div`
  font-size: 16px;
`;

const menuArray = [
  {
    text: globalText.text_user_info_change,
    to: {
      pathname: "/change",
      state: undefined
    }
  },
  {
    text: globalText.text_reserve_check,
    to: {
      pathname: "/reservations",
      state: undefined
    }
  }
];
export default ({ platform }) => {
  return (
    <Wrapper>
      {platform === "desktop"
        ? menuArray.map((e, i) => {
            return (
              <MenuWrapper key={i}>
                <Link to={e.to}>
                  <Text>{e.text}</Text>
                </Link>
              </MenuWrapper>
            );
          })
        : menuArray.map((e, i) => {
            return (
              <MobileWrapper key={i}>
                <Link to={e.to}>
                  <Text>{e.text}</Text>
                </Link>
              </MobileWrapper>
            );
          })}
    </Wrapper>
  );
};
