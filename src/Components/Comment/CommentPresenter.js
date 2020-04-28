import React from "react";
import styled from "styled-components";
import { MiniLoader } from "../Icons";

const Wrapper = styled.div`
  width: 100%;
`;
const ListWrapper = styled.div``;
const CreateWrapper = styled.div`
  width: 100%;
  height: 80px;
  margin: 0 auto;
`;
const Textarea = styled.textarea`
  position: relative;
  float: left;
  width: 92.5%;
  height: 80px;
  font-size: 14px;
  line-height: 1.5;
`;
const Button = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
`;
const ButtonWrapper = styled.div`
  position: relative;
  width: 7.5%;
  height: 100%;
  display: inline-block;
`;
export default ({ content, onClick, loading }) => {
  return (
    <Wrapper>
      <CreateWrapper>
        <Textarea onChange={content.onChange} value={content.value} />
        <ButtonWrapper>
          {loading ? <MiniLoader /> : <Button onClick={onClick}>등록</Button>}
        </ButtonWrapper>
      </CreateWrapper>
    </Wrapper>
  );
};
