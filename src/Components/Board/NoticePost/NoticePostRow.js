import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { dateConverter } from "../../../Utils";

const Warpper = styled.tr`
  display: flex;
  width: 100%;
  padding: 32px 0px 32px 0px;
  border: ${(props) => props.theme.boxBorder};
  border-top: 0;
`;
const Row = styled.td`
  text-align: center;
  font-size: 14px;
`;
const TitleRow = styled(Row)`
  width: 55%;
  font-size: 16px;
`;
const DateRow = styled(Row)`
  width: ${(props) => `${props.width}%`};
  color: ${(props) => props.theme.greyColor};
`;
const ViewRow = styled(Row)`
  width: 20%;
  color: ${(props) => props.theme.greyColor};
`;
const PostLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.blackColor};
`;

export default ({
  post,
  currentPage = 0,
  currentRange = 0,
  boardId,
  onViews = true,
  postOnClick,
}) => {
  const { id, title, views, createdAt } = post;
  return (
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
              boardId,
            },
          }}
          onClick={postOnClick}
        >
          {title}
        </PostLink>
      </TitleRow>
      {onViews ? (
        <>
          <DateRow width={25}>{dateConverter(createdAt)}</DateRow>
          <ViewRow>{views}</ViewRow>
        </>
      ) : (
        <DateRow width={45}>{dateConverter(createdAt)}</DateRow>
      )}
    </Warpper>
  );
};
