import React from "react";
import styled from "styled-components";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
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
const Button = styled.button`
  background-color: transparent;
`;
const PrevButton = styled(Button)``;
const NextButton = styled(Button)``;
const FirstButton = styled(Button)``;
const LastButton = styled(Button)``;

export default ({
  currentRange,
  setCurrentRange,
  currentPage,
  setCurrentPage,
  pageSize,
  rangeSize,
  listCount,
}) => {
  const page = Math.ceil(
    (listCount - currentRange * rangeSize * pageSize) / pageSize
  );
  return (
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

      {currentRange === 0 && currentPage % rangeSize === 0 ? (
        <PrevButton disabled>
          <ChevronLeftIcon />
        </PrevButton>
      ) : (
        <PrevButton
          onClick={() => {
            setCurrentPage(currentPage - 1);
            if (currentPage % rangeSize === 0) {
              setCurrentRange(currentRange - 1);
            }
          }}
        >
          <ChevronLeftIcon />
        </PrevButton>
      )}
      {[
        ...Array(page > rangeSize ? rangeSize : page === 0 ? page + 1 : page),
      ].map((e, i) => {
        if (currentRange === 0) {
          return i === currentPage ? (
            <CurrentTabButton
              key={currentRange * pageSize + i}
              onClick={() => {
                setCurrentPage(currentRange * rangeSize + i);
              }}
            >
              {currentRange * pageSize + i + 1}
            </CurrentTabButton>
          ) : (
            <TabButton
              key={currentRange * pageSize + i}
              onClick={() => {
                setCurrentPage(currentRange * rangeSize + i);
              }}
            >
              {currentRange * pageSize + i + 1}
            </TabButton>
          );
        } else {
          return i === currentPage % (currentRange * pageSize) ? (
            <CurrentTabButton
              key={currentRange * rangeSize + i}
              onClick={() => {
                setCurrentPage(currentRange * rangeSize + i);
              }}
            >
              {currentRange * rangeSize + i + 1}
            </CurrentTabButton>
          ) : (
            <TabButton
              key={currentRange * rangeSize + i}
              onClick={() => {
                setCurrentPage(currentRange * rangeSize + i);
              }}
            >
              {currentRange * rangeSize + i + 1}
            </TabButton>
          );
        }
      })}
      {pageSize * (currentPage + 1) >= listCount ? (
        <NextButton disabled>
          <ChevronRightIcon />
        </NextButton>
      ) : (
        <NextButton
          onClick={() => {
            setCurrentPage(currentPage + 1);
            if (currentPage % rangeSize === rangeSize - 1) {
              setCurrentRange(currentRange + 1);
            }
          }}
        >
          <ChevronRightIcon />
        </NextButton>
      )}
      {currentRange === Math.floor((listCount - 1) / (rangeSize * pageSize)) ? (
        <LastButton disabled>
          <SkipNextIcon />
        </LastButton>
      ) : (
        <LastButton
          onClick={() => {
            setCurrentRange(currentRange + 1);
            setCurrentPage((currentRange + 1) * rangeSize);
          }}
        >
          <SkipNextIcon />
        </LastButton>
      )}
    </TabWrapper>
  );
};
