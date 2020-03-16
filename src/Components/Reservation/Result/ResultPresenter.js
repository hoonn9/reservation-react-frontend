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
  width: 100%;
`;
const NotResultWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const NotResultText = styled.div`
  display: inline-block;
  font-size: 18px;
  padding: 16px;
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
          <NotResultWrapper>
            <NotResultText>검색 결과 없음</NotResultText>
          </NotResultWrapper>
        )}
      </Wrapper>
    </Container>
  );
};
