import React from "react";
import styled from "styled-components";
import FreePostRow from "./FreePost/FreePostRow";
import FreePostHeader from "./FreePost/FreePostHeader";
import { Link } from "react-router-dom";
import MobileFreePostRow from "./FreePost/MobileFreePostRow";
import { globalText } from "../../GlobalText";
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
const TableBody = styled.tbody`
  border-top: ${(props) =>
    props.platform === "desktop"
      ? "0"
      : `1px ${props.theme.darkGreyColor} solid`};
`;
const WriteButton = styled.button`
  position: absolute;
  right: 0;
  text-decoration: none;
  background-color: ${(props) => props.theme.greyColor};
  color: ${(props) => props.theme.blackColor};
  margin-top: 16px;
  padding: 8px 16px;
`;
const MobileWriteButtonWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  text-align: end;
  padding: 16px 8px 8px 0px;
`;
const MobileWriteButton = styled.button`
  text-decoration: none;
  background-color: ${(props) => props.theme.greyColor};
  color: ${(props) => props.theme.blackColor};
  padding: 4px 8px;
`;

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
}) => {
  const page = Math.floor(
    (listCount - currentRange * rangeSize * pageSize) / pageSize
  );
  return (
    <Warpper>
      <TableWarpper>
        <Table>
          <TableBody platform={platform}>
            {platform === "desktop" ? <FreePostHeader /> : null}
          </TableBody>
          <TableBody platform={platform}>
            {data.seeBoard.map((post, index) => {
              return platform === "desktop" ? (
                <FreePostRow
                  key={post.id}
                  post={post}
                  index={listCount - pageSize * currentPage - index}
                  currentPage={currentPage}
                  currentRange={currentRange}
                  boardId={boardId}
                />
              ) : (
                <MobileFreePostRow
                  key={post.id}
                  post={post}
                  index={listCount - pageSize * currentPage - index}
                  currentPage={currentPage}
                  currentRange={currentRange}
                  boardId={boardId}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableWarpper>
      {platform === "desktop" ? (
        <Link
          to={{
            pathname: "/upload",
            state: {
              id: boardId,
            },
          }}
        >
          <WriteButton>{globalText.text_write}</WriteButton>
        </Link>
      ) : (
        <MobileWriteButtonWrapper>
          <Link
            to={{
              pathname: "/upload",
              state: {
                id: boardId,
              },
            }}
          >
            <MobileWriteButton>{globalText.text_write}</MobileWriteButton>
          </Link>
        </MobileWriteButtonWrapper>
      )}
      <PageNavigator
        currentRange={currentRange}
        setCurrentRange={setCurrentRange}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={pageSize}
        page={page}
        rangeSize={rangeSize}
        listCount={listCount}
      />
    </Warpper>
  );
};
