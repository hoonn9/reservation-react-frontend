import React from "react";
import styled from "styled-components";
import Board from "../../Components/Board";

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
`;
const Title = styled.h2`
  font-size: 42px;
`;

export default ({
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
    <Container>
      <Title>{globalText.text_free_board}</Title>
      <Board
        type="free"
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
    </Container>
  );
};
