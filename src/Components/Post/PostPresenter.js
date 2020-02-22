import React from "react";
import styled from "styled-components";

const Warpper = styled.tr`
  display: flex;
  width: 100%;
  padding: 16px 0px 16px 0px;
  border: ${props => props.theme.boxBorder};
`;
const Row = styled.td`
  text-align: center;
  font-size: 14px;
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
export default ({ id, num, title, views, username, createdAt }) => {
  return (
    <Warpper>
      <NumRow>{num}</NumRow>
      <TitleRow>{title}</TitleRow>
      <NameRow>{username}</NameRow>
      <DateRow>{createdAt}</DateRow>
      <ViewRow>{views}</ViewRow>
    </Warpper>
  );
};
