import React, { useEffect } from "react";
import FreePostPresenter from "./FreePostPresenter";
import NoticePostPresenter from "./NoticePostPresenter";
import { setStorage } from "../../Utils";

export default ({
  platform,
  type,
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
  const postOnClick = () => {
    setStorage(`board_${type}`, {
      boardId,
      currentPage,
      currentRange,
    });
  };
  return (
    <>
      {type === "free" ? (
        <FreePostPresenter
          platform={platform}
          type={type}
          data={data}
          rangeSize={rangeSize}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          pageSize={pageSize}
          listCount={listCount}
          boardId={boardId}
          setCurrentRange={setCurrentRange}
          currentRange={currentRange}
          postOnClick={postOnClick}
        />
      ) : (
        <NoticePostPresenter
          platform={platform}
          data={data}
          rangeSize={rangeSize}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          pageSize={pageSize}
          listCount={listCount}
          boardId={boardId}
          setCurrentRange={setCurrentRange}
          currentRange={currentRange}
          postOnClick={postOnClick}
        />
      )}
    </>
  );
};
