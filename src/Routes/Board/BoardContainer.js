import React, { useState } from "react";
import BoardPresenter from "./BoardPresenter";
import { useQuery } from "@apollo/react-hooks";
import { SEE_BOARD_COUNT } from "../../Components/Board/BoardQueries";
import Page from "../../Components/Page";
import Loader from "../../Components/Loader";
import GlobalText from "../../GlobalText";
import ErrorAlert from "../../Components/ErrorAlert";
import { useEffect } from "react";
import { getBoardState } from "../../Utils";

export default ({ location }) => {
  const {
    state: { id: boardId }
  } = location;
  const globalText = GlobalText();
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
      type: "free"
    },
    fetchPolicy: "cache-and-network"
  });

  const pageQuery = Page({
    boardId,
    type: "free",
    first: pageSize,
    skip: currentPage * pageSize
  });

  return (
    <div className="body-content">
      {pageQuery.error || countQuery.error ? (
        <ErrorAlert text={globalText.text_network_error} />
      ) : pageQuery.loading || countQuery.loading ? (
        <Loader />
      ) : (
        <>
          <BoardPresenter
            data={pageQuery.data}
            rangeSize={rangeSize}
            listCount={countQuery.data.seeBoardCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageSize={pageSize}
            globalText={globalText}
            boardId={boardId}
            currentRange={currentRange}
            setCurrentRange={setCurrentRange}
          />
        </>
      )}
    </div>
  );
};
