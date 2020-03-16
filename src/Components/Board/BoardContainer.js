import React from "react";
import FreePostPresenter from "./FreePostPresenter";
import NoticePostPresenter from "./NoticePostPresenter";

export default ({
  type,
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
  return (
    <>
      {type === "free" ? (
        <FreePostPresenter
          data={data}
          rangeSize={rangeSize}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          pageSize={pageSize}
          listCount={listCount}
          globalText={globalText}
          boardId={boardId}
          setCurrentRange={setCurrentRange}
          currentRange={currentRange}
        />
      ) : (
        <NoticePostPresenter
          data={data}
          rangeSize={rangeSize}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          pageSize={pageSize}
          listCount={listCount}
          globalText={globalText}
          boardId={boardId}
          setCurrentRange={setCurrentRange}
          currentRange={currentRange}
        />
      )}
    </>
  );
};
