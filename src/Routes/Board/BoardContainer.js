import React, { useState, useEffect } from "react";
import BoardPresenter from "./BoardPresenter";
import { useQuery } from "react-apollo-hooks";
import { SEE_BOARD_COUNT } from "./BoardQueries";
import Page from "../../Components/Page";
import Loader from "../../Components/Loader";
import GlobalText from "../../GlobalText";
import ErrorAlert from "../../Components/ErrorAlert";

export default ({ location }) => {
  const {
    state: { id: boardId }
  } = location;
  const globalText = GlobalText();
  const pageSize = 10;
  const rangeSize = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const [currentRange, setCurrentRange] = useState(0);
  let listCount = 0;
  const rangeCount = 0;
  const startPage = 1;
  const endPage = 1;

  const countQuery = useQuery(SEE_BOARD_COUNT, {
    variables: {
      boardId,
      type: "free"
    }
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

// countQuery.data.seeBoardCount % pageSize === 0
// ? Math.floor(countQuery.data.seeBoardCount / pageSize)
// : Math.floor(countQuery.data.seeBoardCount / pageSize + 1)
