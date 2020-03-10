import React from "react";
import styled from "styled-components";
import Post from "../../Components/Post";
import PostHeader from "../../Components/PostHeader";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SkipNextIcon from "@material-ui/icons/SkipNext";
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
const TabButton = styled.div`
  display: inline-block;
  border: ${props => props.theme.boxBorder};
  width: 32px;
  height: 32px;
  margin-left: 4px;
  margin-right: 4px;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  line-height: 32px;
  vertical-align: middle;
  cursor: pointer;
`;

const CurrentTabButton = styled.div`
  display: inline-block;
  border: ${props => props.theme.boxBorder};
  width: 32px;
  height: 32px;
  margin-left: 4px;
  margin-right: 4px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  line-height: 32px;
  vertical-align: middle;
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
const PrevButton = styled.button``;
const NextButton = styled.button``;
const FirstButton = styled.button``;
const LastButton = styled.button``;
export default ({
  data,
  rangeSize,
  setCurrentPage,
  currentPage,
  pageSize,
  listCount,
  globalText,
  boardId,
  setCurrentRange,
  currentRange
}) => {
  const page = Math.floor(
    (listCount - currentRange * rangeSize * pageSize) / pageSize
  );
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
        <Link
          to={{
            pathname: "/upload",
            state: {
              id: boardId
            }
          }}
        >
          <WriteButton>{globalText.text_write}</WriteButton>
        </Link>
        {currentRange === 0 ? (
          <FirstButton disabled>
            {" "}
            <SkipPreviousIcon />{" "}
          </FirstButton>
        ) : (
          <FirstButton
            onClick={() => {
              setCurrentRange(currentRange - 1);
              setCurrentPage((currentRange - 1) * pageSize);
            }}
          >
            <SkipPreviousIcon />
          </FirstButton>
        )}

        {currentRange === 0 && currentPage % pageSize === 0 ? (
          <PrevButton disabled>
            <ChevronLeftIcon />
          </PrevButton>
        ) : (
          <PrevButton
            onClick={() => {
              setCurrentPage(currentPage - 1);
              if (currentPage % pageSize === 0) {
                setCurrentRange(currentRange - 1);
              }
            }}
          >
            <ChevronLeftIcon />
          </PrevButton>
        )}
        {[
          ...Array(
            page > 10 ? pageSize : page % pageSize === 0 ? page : page + 1
          )
        ].map((e, i) => {
          if (currentRange === 0) {
            return i === currentPage ? (
              <CurrentTabButton
                key={currentRange * pageSize + i}
                onClick={() => {
                  setCurrentPage(currentRange * pageSize + i);
                }}
              >
                {currentRange * pageSize + i + 1}
              </CurrentTabButton>
            ) : (
              <TabButton
                key={currentRange * pageSize + i}
                onClick={() => {
                  setCurrentPage(currentRange * pageSize + i);
                }}
              >
                {currentRange * pageSize + i + 1}
              </TabButton>
            );
          } else {
            return i === currentPage % (currentRange * pageSize) ? (
              <CurrentTabButton
                key={currentRange * pageSize + i}
                onClick={() => {
                  setCurrentPage(currentRange * pageSize + i);
                }}
              >
                {currentRange * pageSize + i + 1}
              </CurrentTabButton>
            ) : (
              <TabButton
                key={currentRange * pageSize + i}
                onClick={() => {
                  setCurrentPage(currentRange * pageSize + i);
                }}
              >
                {currentRange * pageSize + i + 1}
              </TabButton>
            );
          }
        })}
        {pageSize * (currentPage + 1) > listCount ? (
          <NextButton disabled>
            <ChevronRightIcon />
          </NextButton>
        ) : (
          <NextButton
            onClick={() => {
              setCurrentPage(currentPage + 1);
              if (currentPage % pageSize === pageSize - 1) {
                setCurrentRange(currentRange + 1);
              }
            }}
          >
            <ChevronRightIcon />
          </NextButton>
        )}
        {currentRange === Math.floor(listCount / (rangeSize * pageSize)) ? (
          <LastButton disabled>
            <SkipNextIcon />
          </LastButton>
        ) : (
          <LastButton
            onClick={() => {
              setCurrentRange(currentRange + 1);
              setCurrentPage((currentRange + 1) * pageSize);
            }}
          >
            <SkipNextIcon />
          </LastButton>
        )}
      </TabWrapper>
    </Warpper>
  );
};
