import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BannerEventView from "../../BannerEventView";
const Wrapper = styled.div`
  max-width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: inline-block;
  width: ${props => `${props.divide}%`};
  padding: 0px 16px;
  position: relative;
  z-index: 8;
`;
export default ({ divide, currentItem, seeEvent }) => {
  return (
    <Wrapper>
      {seeEvent.map((event, i) => {
        if (event.eventType === currentItem) {
          return (
            <ContentWrapper key={i} divide={divide}>
              <BannerEventView
                id={event.id}
                type={event.eventType}
                title={event.title}
                subTitle={event.subTitle}
                thumbnail={event.thumbnail}
              />
            </ContentWrapper>
          );
        }
      })}
    </Wrapper>
  );
};
{
  /* <ContentWrapper imageSize={imageSize} key={i}>
              <ContentLink to="/">
                <ImgSpan>
                  <Img src={event.thumbnail} />
                </ImgSpan>
                <TextSpan>
                  <Text>{event.title}</Text>
                </TextSpan>
              </ContentLink>
            </ContentWrapper> */
}
