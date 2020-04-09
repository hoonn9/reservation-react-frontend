import React from "react";
import styled from "styled-components";
import GlobalText from "../../../GlobalText";
const Warpper = styled.tr`
  display: flex;
  width: 100%;
  padding: 16px 0px 16px 0px;
  border: 1px ${(props) => props.theme.liteGreyColor} solid;
  background-color: ${(props) => props.theme.superLiteGreyColor};
`;
const Row = styled.td`
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`;
const NumRow = styled(Row)`
  width: 5%;
`;
const TitleRow = styled(Row)`
  width: 45%;
`;
const NameRow = styled(Row)`
  width: 20%;
`;
const DateRow = styled(Row)`
  width: 20%;
`;
const ViewRow = styled(Row)`
  width: 10%;
`;
export default () => {
  const globalText = GlobalText();
  return (
    <Warpper>
      <NumRow>{globalText.text_board_header_no}</NumRow>
      <TitleRow>{globalText.text_board_header_title}</TitleRow>
      <NameRow>{globalText.text_board_header_name}</NameRow>
      <DateRow>{globalText.text_board_header_date}</DateRow>
      <ViewRow>{globalText.text_board_header_views}</ViewRow>
    </Warpper>
  );
};
