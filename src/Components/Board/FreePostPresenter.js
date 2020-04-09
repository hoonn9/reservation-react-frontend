import React from "react";
import styled from "styled-components";
import FreePostRow from "./FreePost/FreePostRow";
import FreePostHeader from "./FreePost/FreePostHeader";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import MobileFreePostRow from "./FreePost/MobileFreePostRow";
import { globalText } from "../../GlobalText";
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
const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;
const TabButton = styled.div`
  display: inline-block;
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

const Button = styled.button`
  background-color: transparent;
`;
const PrevButton = styled(Button)``;
const NextButton = styled(Button)``;
const FirstButton = styled(Button)``;
const LastButton = styled(Button)``;

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
      <TabWrapper>
        {currentRange === 0 ? (
          <FirstButton disabled>
            <SkipPreviousIcon />
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
          ),
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
