import React from "react";
import styled from "styled-components";
import { MiniLoader } from "../Icons";

const Wrapper = styled.div`
  width: 100%;
`;
const MobileWrapper = styled.div`
  width: 100%;
  padding: 0px 8px;
`;
const CreateWrapper = styled.div`
  width: 100%;
  height: 80px;
  margin: 0 auto;
`;
const Textarea = styled.textarea`
  position: relative;
  float: left;
  width: 90%;
  height: 80px;
  font-size: 14px;
  line-height: 1.5;
`;
const MobileTextarea = styled.textarea`
  position: relative;
  float: left;
  width: 78%;
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
  width: 10%;
  height: 100%;
  display: inline-block;
  padding-left: 16px;
`;
const MobileButtonWrapper = styled.div`
  position: relative;
  width: 22%;
  height: 100%;
  display: inline-block;
  padding-left: 8px;
`;
export default ({ platform, content, onClick, loading }) => {
  return (
    <>
      {platform === "desktop" ? (
        <Wrapper>
          <CreateWrapper>
            <Textarea onChange={content.onChange} value={content.value} />
            <ButtonWrapper>
              {loading ? (
                <MiniLoader />
              ) : (
                <Button onClick={onClick}>등록</Button>
              )}
            </ButtonWrapper>
          </CreateWrapper>
        </Wrapper>
      ) : (
        <MobileWrapper>
          <CreateWrapper>
            <MobileTextarea onChange={content.onChange} value={content.value} />
            <MobileButtonWrapper>
              {loading ? (
                <MiniLoader />
              ) : (
                <Button onClick={onClick}>등록</Button>
              )}
            </MobileButtonWrapper>
          </CreateWrapper>
        </MobileWrapper>
      )}
    </>
  );
};
