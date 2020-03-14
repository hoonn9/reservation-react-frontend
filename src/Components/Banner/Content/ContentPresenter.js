import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BannerEventView from "../../BannerEventView";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const Container = styled.div`
  width: ${props => `${props.wrapperWidth}%`};
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
  overflow-x: hidden;
`;

const SlideList = styled.div`
  width: ${props => `${props.width}px`};
`;

const ContentWrapper = styled.div`
  display: table;
  float: left;
  width: ${props => `${props.imgWidth}px`};
  padding: 0px 16px;
  position: relative;
  z-index: 8;
  &:first-child {
    padding: 0px 16px 0px 0px;
  }
`;

const Button = styled.button`
  background: transparent;
  position: absolute;
  z-index: 30;
`;

const PrevButton = styled(Button)`
  left: 0;
`;

const NextButton = styled(Button)`
  right: 0;
`;

export default ({ imgWidth, wrapperWidth, currentItem, seeEvent }) => {
  const currentArray = seeEvent.filter(e => {
    return e.eventType === currentItem;
  });

  return (
    <Container wrapperWidth={wrapperWidth}>
      <PrevButton>
        <ArrowBackIosIcon />
      </PrevButton>
      <Wrapper wrapperWidth={wrapperWidth}>
        <SlideWrapper>
          <SlideList width={currentArray.length * imgWidth}>
            {currentArray.map((event, i) => {
              return (
                <ContentWrapper key={i} imgWidth={imgWidth}>
                  <BannerEventView
                    id={event.id}
                    type={event.eventType}
                    title={event.title}
                    subTitle={event.subTitle}
                    thumbnail={event.thumbnail}
                  />
                </ContentWrapper>
              );
            })}
          </SlideList>
        </SlideWrapper>
      </Wrapper>
      <NextButton>
        <ArrowForwardIosIcon />
      </NextButton>
    </Container>
  );
};
