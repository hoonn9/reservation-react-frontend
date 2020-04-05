import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { dateConverter } from "../../../Utils";

const Warpper = styled.tr`
  display: flex;
  width: 100%;
  padding: 16px 0px 16px 0px;
  border: ${(props) => props.theme.boxBorder};
`;
const Row = styled.td`
  text-align: center;
  font-size: 12px;
`;
const NumRow = styled(Row)`
  width: 5%;
`;
const TitleRow = styled(Row)`
  width: 45%;
  font-size: 14px;
`;
const NameRow = styled(Row)`
  width: 20%;
`;
const DateRow = styled(Row)`
  width: 20%;
  color: ${(props) => props.theme.greyColor};
`;
const ViewRow = styled(Row)`
  width: 10%;
  color: ${(props) => props.theme.greyColor};
`;
const PostLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.blackColor};
`;

export default ({ post, index: num, currentPage, currentRange, boardId }) => {
  const { id, title, views, user, createdAt } = post;
  return (
    <Warpper>
      <NumRow>{num}</NumRow>

      <TitleRow>
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
        >
          {title}
        </PostLink>
      </TitleRow>

      <NameRow>{user.username}</NameRow>
      <DateRow>{dateConverter(createdAt)}</DateRow>
      <ViewRow>{views}</ViewRow>
    </Warpper>
  );
};
