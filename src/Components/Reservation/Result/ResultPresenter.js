import React from "react";
import styled from "styled-components";
import ResultView from "../ResultView";

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: block;
  width: 80%;
`;

export default ({
  searchType,
  setSelectType,
  globalText,
  setSelectSubType
}) => {
  return (
    <Container>
      <Wrapper>
        {searchType ? (
          searchType.map((type, i) => {
            return type.id ? (
              <ResultView
                type={type}
                globalText={globalText}
                key={i}
                setSelectType={setSelectType}
                setSelectSubType={setSelectSubType}
              />
            ) : null;
          })
        ) : (
          <div>검색결과 없음</div>
        )}
      </Wrapper>
    </Container>
  );
};
