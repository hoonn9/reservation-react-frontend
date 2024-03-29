import React, { useState, useEffect } from "react";
import NoticePresenter from "./NoticePresenter";
import { useQuery } from "@apollo/react-hooks";
import { SEE_BOARD_COUNT } from "../../Components/Board/BoardQueries";
import { BoardPage } from "../../Components/Page";
import Loader from "../../Components/Loader";
import GlobalText from "../../GlobalText";
import ErrorAlert from "../../Components/ErrorAlert";
import { getStorage } from "../../Utils";
import { useLocation } from "react-router-dom";
export default ({ platform }) => {
  const globalText = GlobalText();
  let location = useLocation();
  let boardId = null;
  if (location.state !== undefined) {
    boardId = location.state.id;
  } else {
    boardId = "ck7u4vv4t00bu0797n1hkw0mg";
  }

  const pageSize = 10;
  const rangeSize = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const [currentRange, setCurrentRange] = useState(0);

  useEffect(() => {
    const boardState = getStorage("board");
    if (boardState) {
      boardId = boardState.boardId;
      setCurrentPage(boardState.currentPage);
      setCurrentRange(boardState.currentRange);
    }
    window.addEventListener("beforeunload", (e) => {
      e.preventDefault();
      localStorage.removeItem(boardId);
    });
    return () => {
      localStorage.removeItem(boardId);
      window.removeEventListener("beforeunload", (e) => {
        e.preventDefault();
        localStorage.removeItem(boardId);
      });
    };
  }, [boardId]);

  const countQuery = useQuery(SEE_BOARD_COUNT, {
    variables: {
      boardId,
      postType: "notice",
    },
  });

  const pageQuery = BoardPage({
    boardId,
    postType: "notice",
    first: pageSize,
    skip: currentPage * pageSize,
  });

  return (
    <div className="body-content">
      {pageQuery.error || countQuery.error ? (
        <ErrorAlert />
      ) : pageQuery.loading || countQuery.loading ? (
        <Loader />
      ) : (
        <NoticePresenter
          platform={platform}
          globalText={globalText}
          data={pageQuery.data}
          rangeSize={rangeSize}
          listCount={countQuery.data.seeBoardCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageSize={pageSize}
          boardId={boardId}
          currentRange={currentRange}
          setCurrentRange={setCurrentRange}
        />
      )}
    </div>
  );
};
