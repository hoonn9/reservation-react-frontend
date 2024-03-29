import React from "react";
import styled from "styled-components";
import { dateSimpleConverter } from "../Utils";
const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;
const MobileWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0px 8px;
`;
const TopWrapper = styled.div`
  width: 100%;
  padding: 16px 0px;
`;
const NicknameWrapper = styled.div`
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
`;
const DateWrapper = styled.div`
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  padding-left: 16px;
  color: ${(props) => props.theme.darkGreyColor};
`;
const Textarea = styled.textarea`
  width: 100%;
  background-color: transparent;
  border: none;
  font-size: 14px;
  line-height: 1.5;
`;

export default ({ platform, nickname, text, createdAt }) => {
  return (
    <>
      {platform === "desktop" ? (
        <Wrapper>
          <TopWrapper>
            <NicknameWrapper>{nickname}</NicknameWrapper>
            <DateWrapper>{dateSimpleConverter(createdAt)}</DateWrapper>
          </TopWrapper>
          <Textarea readOnly value={text} />
        </Wrapper>
      ) : (
        <MobileWrapper>
          <TopWrapper>
            <NicknameWrapper>{nickname}</NicknameWrapper>
            <DateWrapper>{dateSimpleConverter(createdAt)}</DateWrapper>
          </TopWrapper>
          <Textarea readOnly value={text} />
        </MobileWrapper>
      )}
    </>
  );
};
