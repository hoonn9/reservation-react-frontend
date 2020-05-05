import React from "react";
import styled from "styled-components";
import Board from "../../Components/Board";
import Title from "../../Components/Title";
import { globalText } from "../../GlobalText";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export default ({
  platform,
  type,
  data,
  rangeSize,
  setCurrentPage,
  currentPage,
  pageSize,
  listCount,
  boardId,
  setCurrentRange,
  currentRange,
}) => {
  return (
    <Container>
      <Title platform={platform} text={globalText.text_free_board} />
      <Board
        platform={platform}
        type={type}
        data={data}
        rangeSize={rangeSize}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        pageSize={pageSize}
        listCount={listCount}
        boardId={boardId}
        setCurrentRange={setCurrentRange}
        currentRange={currentRange}
      />
    </Container>
  );
};
