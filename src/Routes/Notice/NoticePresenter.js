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
      <Title platform={platform} text={globalText.text_notice} />
      <Board
        type="notice"
        platform={platform}
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
