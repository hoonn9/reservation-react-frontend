import React from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import BannerGalleryView from "../../BannerGalleryView";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: relative;
`;

const Wrapper = styled.div`
  width: ${props => `100%`};
  margin: auto;
  position: relative;
`;

const SlideWrapper = styled.div`
  width: 100%;
  margin: auto;
  overflow: hidden;
`;

const SlideList = styled.div`
  width: ${props => `${props.width + props.centerProp}px`};
  transform: ${props => `translate3d(-${props.transValue}px, 0px, 0px)`};
  transition: ${props => `transform ${props.slideSpeed}s ease`};
`;

const ContentWrapper = styled.div`
  display: table;
  float: left;
  width: ${props => `${props.imgWidth}px`};
  position: relative;
  padding-right: ${props => `${props.contentPadding}px`};
  z-index: 8;
  transition: opacity 0.3s linear;
`;

const Button = styled.button`
  background: transparent;
  position: absolute;
  z-index: 30;
  width: 32px;
  height: 32px;
`;

const PrevButton = styled(Button)`
  left: ${props => `${props.centerProp}px`};
`;

const NextButton = styled(Button)`
  right: ${props => `${props.centerProp + 16}px`};
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
  background-color: ${props => props.theme.liteGreyColor};
`;

const DotsActiveButton = styled.button`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => props.theme.redColor};
`;

export default ({
  id,
  currentItem,
  setCurrentItem,
  imgWidth,
  wrapperWidth,
  transValue,
  setTransValue,
  slideSpeed,
  setSlideSpeed,
  viewArray,
  prevButtonTrigger,
  setPrevButtonTrigger,
  nextButtonTrigger,
  setNextButtonTrigger,
  centerProp,
  dotItem,
  setDotItem,
  contentPadding,
  contentHeight
}) => {
  if (viewArray.length > 0) {
    return (
      <>
        <Container wrapperWidth={wrapperWidth}>
          <PrevButton
            centerProp={centerProp}
            onClick={() => {
              if (prevButtonTrigger) {
                setPrevButtonTrigger(false);
                setTimeout(() => setPrevButtonTrigger(true), 300);
                setSlideSpeed(0.3);
                setDotItem(currentItem - 1);
                setCurrentItem(currentItem - 1);
                if (currentItem === 0) {
                  setDotItem(viewArray.length - 1);
                  setTimeout(() => {
                    setCurrentItem(viewArray.length - 1);
                    setSlideSpeed(0);
                  }, 300);
                }
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
                width={(viewArray.length + 2) * imgWidth}
                transValue={transValue}
                slideSpeed={slideSpeed}
                centerProp={centerProp}
              >
                <ContentWrapper
                  key={0}
                  imgWidth={imgWidth}
                  contentPadding={contentPadding}
                  style={{
                    opacity:
                      currentItem === viewArray.length - 1 ? "1.0" : "0.3",
                    marginLeft: centerProp
                  }}
                >
                  <BannerGalleryView
                    id={id}
                    height={contentHeight}
                    thumbnail={viewArray[viewArray.length - 1].url}
                  />
                </ContentWrapper>
                {viewArray.map((current, i) => {
                  if (currentItem === i) {
                    return (
                      <ContentWrapper
                        key={i + 1}
                        imgWidth={imgWidth}
                        contentPadding={contentPadding}
                        style={{ opacity: "1" }}
                      >
                        <BannerGalleryView
                          id={id}
                          height={contentHeight}
                          thumbnail={current.url}
                          title={current.title}
                          subTitle={current.subTitle}
                          trigger={true}
                        />
                      </ContentWrapper>
                    );
                  } else {
                    return (
                      <ContentWrapper
                        key={i + 1}
                        imgWidth={imgWidth}
                        contentPadding={contentPadding}
                        style={{ opacity: "0.3" }}
                      >
                        <BannerGalleryView
                          height={contentHeight}
                          thumbnail={current.url}
                          id={id}
                          trigger={false}
                        />
                      </ContentWrapper>
                    );
                  }
                })}
                <ContentWrapper
                  key={viewArray.length}
                  imgWidth={imgWidth}
                  contentPadding={contentPadding}
                  style={{
                    opacity: currentItem === 0 ? "1.0" : "0.3"
                  }}
                >
                  <BannerGalleryView
                    id={id}
                    height={contentHeight}
                    thumbnail={viewArray[0].url}
                  />
                </ContentWrapper>
              </SlideList>
            </SlideWrapper>
          </Wrapper>
          <NextButton
            centerProp={centerProp}
            onClick={() => {
              if (nextButtonTrigger) {
                setNextButtonTrigger(false);
                setTimeout(() => setNextButtonTrigger(true), 300);
                setSlideSpeed(0.3);
                setDotItem(currentItem + 1);
                setCurrentItem(currentItem + 1);

                if (currentItem === viewArray.length - 1) {
                  setDotItem(0);
                  setTimeout(() => {
                    setCurrentItem(0);
                    setSlideSpeed(0);
                  }, 300);
                }
              }
            }}
          >
            <ArrowForwardIosIcon
              style={{ color: "#161412", width: "32px", height: "32px" }}
            />
          </NextButton>
        </Container>
        <DotsWrapper>
          {[...Array(viewArray.length)].map((e, i) => {
            if (i < viewArray.length) {
              if (dotItem === i) {
                return (
                  <DotsList key={i}>
                    <DotsActiveButton
                      onClick={() => {
                        setSlideSpeed(0.3);
                        setDotItem(i);
                        setCurrentItem(i);
                        setTransValue(imgWidth * (i + 1));
                      }}
                    />
                  </DotsList>
                );
              } else {
                return (
                  <DotsList key={i}>
                    <DotsButton
                      onClick={() => {
                        setSlideSpeed(0.3);
                        setDotItem(i);
                        setCurrentItem(i);
                        setTransValue(imgWidth * (i + 1));
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
  } else {
    return (
      <Container wrapperWidth={wrapperWidth}>
        <Wrapper wrapperWidth={wrapperWidth}>
          <SlideWrapper>
            <SlideList
              width={(viewArray.length + 2) * imgWidth}
              transValue={transValue}
              slideSpeed={slideSpeed}
              centerProp={centerProp}
            >
              <ContentWrapper
                key={viewArray.length}
                imgWidth={imgWidth}
                contentPadding={contentPadding}
              >
                <BannerGalleryView
                  id={id}
                  height={contentHeight}
                  thumbnail={null}
                />
              </ContentWrapper>
            </SlideList>
          </SlideWrapper>
        </Wrapper>
      </Container>
    );
  }
};
