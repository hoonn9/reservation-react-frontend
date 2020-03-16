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
  globalText,
  data,
  rangeSize,
  listCount,
  currentPage,
  setCurrentPage,
  pageSize,
  boardId,
  currentRange,
  setCurrentRange
}) => {
  return (
    <Container>
      <Title>{globalText.text_notice}</Title>
      <Board
        type="notice"
        globalText={globalText}
        data={data}
        rangeSize={rangeSize}
        listCount={listCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={pageSize}
        boardId={boardId}
        currentRange={currentRange}
        setCurrentRange={setCurrentRange}
      />
    </Container>
  );
};
