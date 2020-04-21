import React from "react";
import styled from "styled-components";
import ResultView from "../ResultView";
import { globalText } from "../../../GlobalText";

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
export default ({ platform, data, setSelectType, setSelectSubType }) => {
  return (
    <Container>
      <Wrapper>
        {data ? (
          data.searchRoom.map((room, i) => {
            return room.id ? (
              <ResultView
                platform={platform}
                room={room}
                globalText={globalText}
                key={i}
                setSelectType={setSelectType}
                setSelectSubType={setSelectSubType}
              />
            ) : null;
          })
        ) : (
          <NotResultWrapper>
            <NotResultText>{globalText.text_no_result}</NotResultText>
          </NotResultWrapper>
        )}
      </Wrapper>
    </Container>
  );
};
