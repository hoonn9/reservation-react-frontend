import React from "react";
import styled from "styled-components";
import NoticePostRow from "./NoticePost/NoticePostRow";
import NoticePostHeader from "./NoticePost/NoticePostHeader";
import MobileNoticePostRow from "./NoticePost/MobileNoticePostRow";
import PageNavigator from "../PageNavigator";
const Warpper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
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

export default ({
  platform,
  data,
  rangeSize,
  setCurrentPage,
  currentPage,
  pageSize,
  listCount,
  boardId,
  setCurrentRange,
  currentRange,
  postOnClick,
}) => {
  const page = Math.floor(
    (listCount - currentRange * rangeSize * pageSize) / pageSize
  );
  return (
    <Warpper>
      <TableWarpper>
        <Table>
          <TableBody>
            {platform === "desktop" ? <NoticePostHeader /> : null}
          </TableBody>
          <TableBody>
            {data.seeBoard.map((post) => {
              return platform === "desktop" ? (
                <NoticePostRow
                  key={post.id}
                  post={post}
                  currentPage={currentPage}
                  currentRange={currentRange}
                  boardId={boardId}
                  postOnClick={postOnClick}
                />
              ) : (
                <MobileNoticePostRow
                  key={post.id}
                  post={post}
                  currentPage={currentPage}
                  currentRange={currentRange}
                  boardId={boardId}
                  postOnClick={postOnClick}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableWarpper>
      <PageNavigator
        currentRange={currentRange}
        setCurrentRange={setCurrentRange}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={pageSize}
        page={page}
        rangeSize={rangeSize}
        listCount={listCount}
        onClick={postOnClick}
      />
    </Warpper>
  );
};
