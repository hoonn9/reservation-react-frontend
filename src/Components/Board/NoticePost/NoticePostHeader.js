import React from "react";
import styled from "styled-components";
import GlobalText from "../../../GlobalText";
const Warpper = styled.tr`
  display: flex;
  width: 100%;
  padding: 32px 0px 32px 0px;
  border: ${props => props.theme.boardHeaderBorder};
  background-color: ${props => props.theme.superLiteGreyColor};
`;
const Row = styled.td`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;
const TitleRow = styled(Row)`
  width: 55%;
`;
const DateRow = styled(Row)`
  width: 25%;
`;
const ViewRow = styled(Row)`
  width: 20%;
`;
export default () => {
  const globalText = GlobalText();
  return (
    <Warpper>
      <TitleRow>{globalText.text_board_header_title}</TitleRow>
      <DateRow>{globalText.text_board_header_date}</DateRow>
      <ViewRow>{globalText.text_board_header_views}</ViewRow>
    </Warpper>
  );
};
