import React from "react";
import styled from "styled-components";
import Post from "../../Components/Post";
import PostHeader from "../../Components/PostHeader";
import { Link } from "react-router-dom";
const Warpper = styled.table`
  width: 100%;
  height: 100%;
  margin-top: 120px;
`;
const TableBody = styled.tbody``;
export default ({
  data,
  rangeSize,
  setCurrentPage,
  currentPage,
  pageSize,
  listCount
}) => {
  console.log(rangeSize);
  console.log(currentPage);
  return (
    <Warpper>
      <PostHeader />
      <TableBody>
        {data.seeBoard.map((post, index) => (
          <Post
            key={post.id}
            post={post}
            index={listCount - pageSize * currentPage - index}
          />
        ))}
      </TableBody>
      <Link to="/upload">글쓰기</Link>
      {[...Array(rangeSize)].map((e, i) => {
        return (
          <button
            onClick={() => {
              setCurrentPage(i);
            }}
          >
            {i + 1}
          </button>
        );
      })}
    </Warpper>
  );
};
