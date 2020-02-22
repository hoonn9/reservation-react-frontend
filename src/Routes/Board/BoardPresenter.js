import React from "react";
import styled from "styled-components";
import Post from "../../Components/Post";
import PostHeader from "../../Components/PostHeader";
import { Link } from "react-router-dom";
const Warpper = styled.table`
  width: 100%;
`;
const TableBody = styled.tbody``;
export default ({ data }) => {
  return (
    <Warpper>
      <PostHeader />
      <TableBody>
        {data.seeBoard.map((post, index) => (
          <Post
            key={post.id}
            post={post}
            index={data.seeBoard.length - index}
          />
        ))}
      </TableBody>
      <Link to="/upload">글쓰기</Link>
    </Warpper>
  );
};
