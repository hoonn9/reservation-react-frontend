import React, { useState } from "react";
import NoticePresenter from "./NoticePresenter";
import { useQuery } from "react-apollo-hooks";
import { SEE_BOARD_COUNT } from "../../Components/Board/BoardQueries";
import Page from "../../Components/Page";
import Loader from "../../Components/Loader";
import GlobalText from "../../GlobalText";
import ErrorAlert from "../../Components/ErrorAlert";

export default ({ location }) => {
  const globalText = GlobalText();

  const {
    state: { id: boardId }
  } = location;

  const pageSize = 10;
  const rangeSize = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const [currentRange, setCurrentRange] = useState(0);

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
