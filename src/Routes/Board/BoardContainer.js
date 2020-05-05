import React, { useState } from "react";
import BoardPresenter from "./BoardPresenter";
import { useQuery } from "@apollo/react-hooks";
import { SEE_BOARD_COUNT } from "../../Components/Board/BoardQueries";
import { BoardPage } from "../../Components/Page";
import Loader from "../../Components/Loader";
import ErrorAlert from "../../Components/ErrorAlert";
import { useEffect } from "react";
import { getStorage } from "../../Utils";
import { useLocation, useHistory } from "react-router-dom";
import { globalText } from "../../GlobalText";

export default ({ platform }) => {
  let location = useLocation();
  let history = useHistory();
  let boardId = null;
  const type = "free";
  if (location.state !== undefined) {
    boardId = location.state.id;
  }
  const pageSize = 10;
  const rangeSize = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const [currentRange, setCurrentRange] = useState(0);

  useEffect(() => {
    const boardState = getStorage(`board_${type}`);
    if (boardState) {
      boardId = boardState.boardId;
      setCurrentPage(boardState.currentPage);
      setCurrentRange(boardState.currentRange);
    }

    if (!boardId && !boardState) {
      history.push("/");
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
      postType: type,
    },
    fetchPolicy: "cache-and-network",
  });

  const pageQuery = BoardPage({
    boardId,
    postType: type,
    first: pageSize,
    skip: currentPage * pageSize,
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
            platform={platform}
            type={type}
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
        </>
      )}
    </div>
  );
};
