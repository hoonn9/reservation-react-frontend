import React, { useState, useEffect } from "react";
import BoardPresenter from "./BoardPresenter";
import { useQuery } from "react-apollo-hooks";
import { SEE_BOARD, SEE_BOARD_COUNT } from "./BoardQueries";
import Page from "../../Components/Page";

const getPage = () => {
  const { data, loading } = Page({ type: "free", first: 3, skip: 0 });
};

export default () => {
  const pageSize = 10;
  const rangeSize = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const [currentRange, setCurrentRange] = useState(1);
  let listCount = 0;
  const rangeCount = 0;
  const startPage = 1;
  const endPage = 1;

  const countQuery = useQuery(SEE_BOARD_COUNT, {
    variables: {
      type: "free"
    }
  });

  const pageQuery = Page({
    type: "free",
    first: pageSize,
    skip: currentPage * pageSize
  });

  useEffect(() => {
    // if (!countQuery.loading) {
    //   listCount = countQuery.data.seeBoardCount;
    // }
    // console.log(listCount);
    console.log(currentPage);
  });

  return pageQuery.loading || countQuery.loading ? (
    <div>loading</div>
  ) : (
    <>
      <BoardPresenter
        data={pageQuery.data}
        rangeSize={
          countQuery.data.seeBoardCount % pageSize === 0
            ? Math.floor(countQuery.data.seeBoardCount / pageSize)
            : Math.floor(countQuery.data.seeBoardCount / pageSize + 1)
        }
        listCount={countQuery.data.seeBoardCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={pageSize}
      />
    </>
  );
};
