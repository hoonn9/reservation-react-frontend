import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { dateConverter } from "../../../Utils";

const Warpper = styled.tr`
  display: flex;
  width: 100%;
  padding: 24px 0px 24px 0px;
  &:first-child {
    border-top: 1px ${props => props.theme.darkGreyColor} solid;
  }
`;
const BottomWrapper = styled.tr`
  display: flex;
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 1px ${props => props.theme.darkGreyColor} solid;
  text-align: end;
`;
const Row = styled.td`
  text-align: center;
  font-size: 14px;
`;
const TitleRow = styled(Row)`
  width: 100%;
  font-size: 16px;
  padding: 0px 8px;
  text-align: start;
`;
const DateRow = styled(Row)`
  padding: 0px 8px;
  color: ${props => props.theme.liteGreyColor};
`;
const ViewRow = styled(Row)`
  padding: 0px 8px;
  color: ${props => props.theme.liteGreyColor};
`;
const PostLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.blackColor};
`;

export default ({
  post,
  currentPage = 0,
  currentRange = 0,
  boardId,
  onViews = true
}) => {
  const { id, title, views, createdAt } = post;
  return (
    <>
      <Warpper>
        <TitleRow>
          <PostLink
            to={{
              pathname: `/notice/${id}`,
              state: {
                id,
                type: "notice",
                currentPage,
                currentRange,
                boardId
              }
            }}
          >
            {title}
          </PostLink>
        </TitleRow>
      </Warpper>
      <BottomWrapper>
        <DateRow>{dateConverter(createdAt)}</DateRow>
        <ViewRow>조회 {views}</ViewRow>
      </BottomWrapper>
    </>
  );
};
