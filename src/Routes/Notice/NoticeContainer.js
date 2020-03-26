import React, { useState, useEffect } from "react";
import NoticePresenter from "./NoticePresenter";
import { useQuery } from "@apollo/react-hooks";
import { SEE_BOARD_COUNT } from "../../Components/Board/BoardQueries";
import Page from "../../Components/Page";
import Loader from "../../Components/Loader";
import GlobalText from "../../GlobalText";
import ErrorAlert from "../../Components/ErrorAlert";
import { getBoardState } from "../../Utils";
import { useLocation, useHistory } from "react-router-dom";
export default ({ platform }) => {
  const globalText = GlobalText();
  let location = useLocation();
  let history = useHistory();
  let boardId = null;
  try {
    boardId = location.state.id;
  } catch (error) {
    history.push("/");
  }

  const pageSize = 10;
  const rangeSize = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const [currentRange, setCurrentRange] = useState(0);

  useEffect(() => {
    const boardState = getBoardState(boardId);
    if (boardState) {
      setCurrentPage(boardState.currentPage);
      setCurrentRange(boardState.currentRange);
    }
    window.addEventListener("beforeunload", e => {
      e.preventDefault();
      localStorage.removeItem(boardId);
    });
    return () => {
      localStorage.removeItem(boardId);
      window.removeEventListener("beforeunload", e => {
        e.preventDefault();
        localStorage.removeItem(boardId);
      });
    };
  }, [boardId]);

  const countQuery = useQuery(SEE_BOARD_COUNT, {
    variables: {
      boardId,
      type: "notice"
    }
  });

  const pageQuery = Page({
    boardId,
    type: "notice",
    first: pageSize,
    skip: currentPage * pageSize
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
