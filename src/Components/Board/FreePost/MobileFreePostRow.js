import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { dateSimpleConverter } from "../../../Utils";

const Warpper = styled.tr``;
const TopWarpper = styled.td`
  display: flex;
  width: 100%;
  padding: 16px 0px;
  line-height: 16px;
`;
const BottomWrapper = styled.td`
  display: flex;
  width: 100%;
  padding: 8px 0px;
  border-bottom: 1px ${(props) => props.theme.darkGreyColor} solid;
`;
const Row = styled.div`
  position: relative;
  text-align: center;
  font-size: 12px;
`;
const TitleRow = styled(Row)`
  width: 100%;
  font-size: 16px;
  padding: 0px 8px;
  text-align: start;
`;
const NameRow = styled(Row)`
  padding: 0px 8px;
  color: ${(props) => props.theme.darkGreyColor};
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
  index: num,
  currentPage,
  currentRange,
  boardId,
  postOnClick,
}) => {
  const { id, title, views, user, createdAt } = post;
  return (
    <>
      <Warpper>
        <TopWarpper>
          <PostLink
            to={{
              pathname: `/post/${id}`,
              state: {
                id,
                type: "free",
                currentPage,
                currentRange,
                boardId,
              },
            }}
            onClick={postOnClick}
          >
            <TitleRow>{title}</TitleRow>
          </PostLink>
        </TopWarpper>
        <BottomWrapper>
          <NameRow>{user.nickname}</NameRow>
          <DateRow>{dateSimpleConverter(createdAt)}</DateRow>
          <ViewRow>조회 {views}</ViewRow>
        </BottomWrapper>
      </Warpper>
    </>
  );
};
