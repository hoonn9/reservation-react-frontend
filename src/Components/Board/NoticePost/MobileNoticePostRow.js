import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { dateConverter } from "../../../Utils";

const Wrapper = styled.tr`
  border-top: 1px ${(props) => props.theme.darkGreyColor} solid;
  border-bottom: 1px ${(props) => props.theme.darkGreyColor} solid;
`;

const TopWarpper = styled.td`
  display: flex;
  width: 100%;
  padding: 24px 0px;
  line-height: 24px;
`;
const BottomWrapper = styled.td`
  display: flex;
  width: 100%;
  padding-bottom: 16px;
  text-align: end;
`;
const Row = styled.div`
  position: relative;
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
  color: ${(props) => props.theme.liteGreyColor};
`;
const ViewRow = styled(Row)`
  padding: 0px 8px;
  color: ${(props) => props.theme.liteGreyColor};
`;
const PostLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.blackColor};
  width: 100%;
  height: 100%;
`;

export default ({
  post,
  currentPage = 0,
  currentRange = 0,
  boardId,
  onViews = true,
}) => {
  const { id, title, views, createdAt } = post;
  return (
    <>
      <Wrapper>
        <TopWarpper>
          <PostLink
            to={{
              pathname: `/notice/${id}`,
              state: {
                id,
                type: "notice",
                currentPage,
                currentRange,
                boardId,
              },
            }}
          >
            <TitleRow>{title}</TitleRow>
          </PostLink>
        </TopWarpper>
        <BottomWrapper>
          <DateRow>{dateConverter(createdAt)}</DateRow>
          <ViewRow>조회 {views}</ViewRow>
        </BottomWrapper>
      </Wrapper>
    </>
  );
};
