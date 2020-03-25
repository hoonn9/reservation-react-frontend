import React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
const Inner = styled.div`
  margin: 0px 16px;
  visibility: ${props => (props.state ? "visible" : "hidden")};
`;
const MobileInner = styled.div`
  width: 100%;
  position: absolute;
  margin: 85px 0px;
  padding: 0px 5%;
  visibility: ${props => (props.state ? "visible" : "hidden")};
`;
const PopupWrapper = styled.div`
  width: 350px;
  background: ${props => props.theme.whiteColor};
`;
const MobilePopupWrapper = styled.div`
  width: 100%;
  background: ${props => props.theme.whiteColor};
`;
const Title = styled.div`
  padding: 16px;
  font-size: 18px;
  font-weight: 500;
`;
const Content = styled.div`
  padding: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.15;
`;
const Img = styled.img`
  width: 100%;
  height: auto;
  max-height: 600px;
`;
const MobileImg = styled.img`
  width: 100%;
  height: 350px;
`;
const BottomWrapper = styled.div`
  width: 100%;
  height: 48px;
  position: relative;
  bottom: 0;
  background: ${props => props.theme.whiteColor};
`;
const BottomTextWrapper = styled.div`
  position: absolute;
  height: 100%;
  left: 0;
  padding-left: 8px;
  display: inline-block;
`;
const BottomText = styled.div`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  height: 100%;
  line-height: 48px;
`;
const CheckBox = styled.input`
  width: 24px;
  height: 24px;
  padding-left: 8px;
  vertical-align: middle;
`;
const DelButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 8px 8px;
  background-color: transparent;
`;
export default ({
  platform,
  popup,
  cb,
  setCb,
  state,
  setState,
  closePopupNotToday,
  closeCounter
}) => {
  return (
    <>
      {platform === "desktop" ? (
        <Inner state={state}>
          <PopupWrapper>
            <Title>{popup.title}</Title>
            <Img src={popup.url} />
            <Content>{popup.content}</Content>
          </PopupWrapper>
          <BottomWrapper>
            <BottomTextWrapper>
              <BottomText>오늘 그만 보기</BottomText>
              <CheckBox
                type="checkbox"
                onChange={e => {
                  setCb(e.target.checked);
                }}
              />
            </BottomTextWrapper>

            <DelButton
              onClick={() => {
                setState(false);
                closeCounter();
                if (cb) {
                  closePopupNotToday(popup.id);
                }
              }}
            >
              <CloseIcon />
            </DelButton>
          </BottomWrapper>
        </Inner>
      ) : (
        <MobileInner state={state}>
          <MobilePopupWrapper>
            <Title>{popup.title}</Title>
            <MobileImg src={popup.url} />
            <Content>{popup.content}</Content>
          </MobilePopupWrapper>
          <BottomWrapper>
            <BottomTextWrapper>
              <BottomText>오늘 그만 보기</BottomText>
              <CheckBox
                type="checkbox"
                onChange={e => {
                  setCb(e.target.checked);
                }}
              />
            </BottomTextWrapper>

            <DelButton
              onClick={() => {
                setState(false);
                closeCounter();
                if (cb) {
                  closePopupNotToday(popup.id);
                }
              }}
            >
              <CloseIcon />
            </DelButton>
          </BottomWrapper>
        </MobileInner>
      )}
    </>
  );
};
