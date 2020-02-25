import React from "react";
import styled from "styled-components";
import Post from "../../Components/Post";
import PostHeader from "../../Components/PostHeader";
import { Link } from "react-router-dom";
const Warpper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 120px;
  justify-content: center;
  align-items: center;
  padding: 0px 32px 0px 32px;
`;
const TableWarpper = styled.div`
  display: flex;
  justify-content: center;
`;
const Table = styled.table`
  width: 100%;
  height: 100%;
`;
const TableBody = styled.tbody``;
const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;
const TabButton = styled.span`
  border: ${props => props.theme.boxBorder};
  padding: 8px;
  margin-left: 4px;
  margin-right: 4px;
  cursor: pointer;
`;
const WriteButton = styled.button`
  position: absolute;
  right: 0;
  text-decoration: none;
  background-color: ${props => props.theme.greyColor};
  color: ${props => props.theme.blackColor};
  margin-right: 32px;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: lighter;
  margin-bottom: 32px;
`;
export default ({
  data,
  rangeSize,
  setCurrentPage,
  currentPage,
  pageSize,
  listCount,
  globalText
}) => {
  return (
    <Warpper>
      <Title>자유게시판</Title>
      <TableWarpper>
        <Table>
          <TableBody>
            <PostHeader />
          </TableBody>
          <TableBody>
            {data.seeBoard.map((post, index) => (
              <Post
                key={post.id}
                post={post}
                index={listCount - pageSize * currentPage - index}
              />
            ))}
          </TableBody>
        </Table>
      </TableWarpper>
      <TabWrapper>
        <Link to="/upload">
          <WriteButton>{globalText.text_write}</WriteButton>
        </Link>
        {[...Array(rangeSize)].map((e, i) => {
          return (
            <TabButton
              key={i}
              onClick={() => {
                setCurrentPage(i);
              }}
            >
              {i + 1}
            </TabButton>
          );
        })}
      </TabWrapper>
    </Warpper>
  );
};
