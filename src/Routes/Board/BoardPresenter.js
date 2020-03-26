import React from "react";
import styled from "styled-components";
import Board from "../../Components/Board";
import Title from "../../Components/Title";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export default ({
  platform,
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
      <Title platform={platform} text={globalText.text_free_board} />
      <Board
        platform={platform}
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
