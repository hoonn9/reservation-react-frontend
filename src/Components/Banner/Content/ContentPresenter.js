import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  max-width: 75%;
  margin: 0 auto;
  display: flex;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: inline-block;
  width: ${props => `${props.imageSize.width}px`};
  position: relative;
  z-index: 8;
`;

const Img = styled.img`
  background-size: contain;
  width: 100%;
  height: 100%;
`;
const ImgSpan = styled.span`
  width: 100%;
  position: relative;
  display: block;
`;
const Text = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  height: 2.2em;
  max-height: 2.2em;
  line-height: 1.2;
  margin-bottom: 0.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  text-align: center;
  word-wrap: break-word;
  display: block;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding-bottom: 5px;
  box-sizing: content-box;
`;
const TextSpan = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
  width: 100%;
  padding: 8.2% 12.2% 6.2%;
  word-break: keep-all;
  z-index: 10;
  background: rgba(0, 0, 0, 0.3);
`;
const ContentLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 9;
`;
export default ({ imageSize, currentItem, eventArray, seeEvent }) => {
  return (
    <Wrapper>
      {seeEvent.map((event, i) => {
        if (event.eventType === currentItem) {
          return (
            <ContentWrapper imageSize={imageSize} key={i}>
              <ContentLink to="/">
                <ImgSpan>
                  <Img src={event.thumbnail} />
                </ImgSpan>
                <TextSpan>
                  <Text>{event.title}</Text>
                </TextSpan>
              </ContentLink>
            </ContentWrapper>
          );
        }
      })}
    </Wrapper>
  );
};
