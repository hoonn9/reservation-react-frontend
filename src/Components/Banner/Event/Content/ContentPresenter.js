import React from "react";
import styled from "styled-components";
import BannerEventView from "../../../BannerEventView";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const Container = styled.div`
  width: ${(props) => `${props.wrapperWidth}%`};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: relative;
`;

const Wrapper = styled.div`
  width: ${(props) => `100%`};
  margin: auto;
  position: relative;
`;

const SlideWrapper = styled.div`
  width: 100%;
  margin: auto;
  overflow-x: hidden;
`;

const SlideList = styled.div`
  width: ${(props) => `${props.width}px`};
  transform: ${(props) => `translate3d(-${props.transValue}px, 0px, 0px)`};
  transition: transform 0.3s ease;
`;

const ContentWrapper = styled.div`
  display: table;
  float: left;
  width: ${(props) => `${props.imgWidth}px`};
  position: relative;
  padding-right: 24px;
  z-index: 8;
`;

const Button = styled.button`
  background: transparent;
  position: absolute;
  z-index: 30;
  width: 32px;
  height: 32px;
`;

const PrevButton = styled(Button)`
  left: 0;
`;

const NextButton = styled(Button)`
  right: 16px;
`;

const DotsWrapper = styled.ul`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DotsList = styled.li`
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 15px;
  height: 15px;
  margin: 0 3px;
  padding: 0;
  cursor: pointer;
  text-align: center;
`;
const DotsButton = styled.button`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.liteGreyColor};
`;

const DotsActiveButton = styled.button`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.redColor};
`;

export default ({
  imgWidth,
  wrapperWidth,
  transValue,
  setTransValue,
  divide,
  currentArray,
}) => {
  return (
    <>
      <Container wrapperWidth={wrapperWidth}>
        <PrevButton
          onClick={() => {
            if (transValue / imgWidth > 0) {
              setTransValue(transValue - imgWidth);
            }
          }}
        >
          <ArrowBackIosIcon
            style={{ color: "#161412", width: "32px", height: "32px" }}
          />
        </PrevButton>
        <Wrapper wrapperWidth={wrapperWidth}>
          <SlideWrapper>
            <SlideList
              width={currentArray.length * imgWidth}
              transValue={transValue}
            >
              {currentArray.map((event, i) => {
                return (
                  <ContentWrapper key={i} imgWidth={imgWidth}>
                    <BannerEventView
                      id={event.id}
                      type={event.eventType}
                      title={event.title}
                      subTitle={event.subTitle}
                      thumbnail={
                        event.files.length > 0 ? event.files[0].url : null
                      }
                    />
                  </ContentWrapper>
                );
              })}
            </SlideList>
          </SlideWrapper>
        </Wrapper>
        <NextButton
          onClick={() => {
            if (transValue / imgWidth < currentArray.length - divide) {
              setTransValue(transValue + imgWidth);
            }
          }}
        >
          <ArrowForwardIosIcon
            style={{ color: "#161412", width: "32px", height: "32px" }}
          />
        </NextButton>
      </Container>
      <DotsWrapper>
        {[...Array(currentArray.length)].map((e, i) => {
          if (i < currentArray.length - 2) {
            if (transValue / imgWidth === i) {
              return (
                <DotsList key={i}>
                  <DotsActiveButton
                    onClick={() => {
                      setTransValue(imgWidth * i);
                    }}
                  />
                </DotsList>
              );
            } else {
              return (
                <DotsList key={i}>
                  <DotsButton
                    onClick={() => {
                      setTransValue(imgWidth * i);
                    }}
                  />
                </DotsList>
              );
            }
          } else {
            return null;
          }
        })}
      </DotsWrapper>
    </>
  );
};
