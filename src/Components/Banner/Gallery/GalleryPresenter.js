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

const Title = styled.h2`
  font-size: 42px;
  padding: 32px 0px;
  margin-left: 12.5%;
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
  padding-right: 24px;
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
  currentItem,
  setCurrentItem,
  imgWidth,
  wrapperWidth,
  transValue,
  setTransValue,
  slideSpeed,
  setSlideSpeed,
  galleryData,
  prevButtonTrigger,
  setPrevButtonTrigger,
  nextButtonTrigger,
  setNextButtonTrigger,
  centerProp
}) => {
  const currentArray = galleryData.files;
  return (
    <>
      <Title>{galleryData.typeName}</Title>
      <Container wrapperWidth={wrapperWidth}>
        <PrevButton
          centerProp={centerProp}
          onClick={() => {
            if (prevButtonTrigger) {
              setPrevButtonTrigger(false);
              setTimeout(() => setPrevButtonTrigger(true), 300);
              setSlideSpeed(0.3);
              setCurrentItem(currentItem - 1);
              setTransValue(transValue - imgWidth);

              if (currentItem === 0) {
                setCurrentItem(currentArray.length - 1);
                setTimeout(() => {
                  setSlideSpeed(0);
                  setTransValue(currentArray.length * imgWidth);
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
              width={(currentArray.length + 2) * imgWidth}
              transValue={transValue}
              slideSpeed={slideSpeed}
              centerProp={centerProp}
            >
              <ContentWrapper
                key={0}
                imgWidth={imgWidth}
                style={{
                  opacity:
                    currentItem === currentArray.length - 1 ? "1.0" : "0.3",
                  marginLeft: centerProp
                }}
              >
                <BannerGalleryView
                  thumbnail={currentArray[currentArray.length - 1].url}
                />
              </ContentWrapper>
              {currentArray.map((current, i) => {
                if (currentItem === i) {
                  return (
                    <ContentWrapper
                      key={i + 1}
                      imgWidth={imgWidth}
                      style={{ opacity: "1" }}
                    >
                      <BannerGalleryView
                        thumbnail={current.url}
                        title={"타이틀"}
                        subTitle={"서브타이틀"}
                        trigger={true}
                      />
                    </ContentWrapper>
                  );
                } else {
                  return (
                    <ContentWrapper
                      key={i + 1}
                      imgWidth={imgWidth}
                      style={{ opacity: "0.3" }}
                    >
                      <BannerGalleryView
                        thumbnail={current.url}
                        id={galleryData.id}
                        trigger={false}
                      />
                    </ContentWrapper>
                  );
                }
              })}
              <ContentWrapper
                key={galleryData.length}
                imgWidth={imgWidth}
                style={{
                  opacity: currentItem === 0 ? "1.0" : "0.3"
                }}
              >
                <BannerGalleryView thumbnail={currentArray[0].url} />
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
              setCurrentItem(currentItem + 1);
              setTransValue(transValue + imgWidth);

              if (currentItem === currentArray.length - 1) {
                setCurrentItem(0);
                setTimeout(() => {
                  setSlideSpeed(0);
                  setTransValue(imgWidth);
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
        {[...Array(currentArray.length)].map((e, i) => {
          if (i < currentArray.length) {
            if (currentItem === i) {
              return (
                <DotsList key={i}>
                  <DotsActiveButton
                    onClick={() => {
                      setSlideSpeed(0.3);
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
};
