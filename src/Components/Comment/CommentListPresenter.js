import React from "react";
import styled from "styled-components";
import CommentRow from "../CommentRow";

const Wrapper = styled.div`
  width: 100%;
`;
export default ({ platform, data }) => {
  return (
    <Wrapper>
      {data
        ? data.map((e, i) => {
            return (
              <CommentRow
                key={i}
                platform={platform}
                text={e.text}
                nickname={e.nickname}
                createdAt={e.createdAt}
              />
            );
          })
        : null}
    </Wrapper>
  );
};
