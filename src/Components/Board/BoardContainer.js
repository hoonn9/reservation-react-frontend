import React from "react";
import FreePostPresenter from "./FreePostPresenter";
import NoticePostPresenter from "./NoticePostPresenter";

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
  return (
    <>
      {type === "free" ? (
        <FreePostPresenter
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
        />
      )}
    </>
  );
};
