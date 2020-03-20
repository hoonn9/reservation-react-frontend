import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  max-width: 100%;
  position: relative;
`;

const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

const ContentLink = styled(Link)``;

const Img = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: 100%;
`;

const ImgWrapper = styled.div`
  display: block;
  width: 100%;
  height: ${props => `${props.height}px`};
  overflow: hidden;
  position: relative;
  padding-bottom: 67%;
`;

const TextWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  line-height: normal;
  min-height: 180px;
  z-index: 150;
  background: rgba(0, 0, 0, 0.2);
  transform: ${props =>
    props.trigger
      ? "translate3d(0px, 0px, 0px)"
      : "translate3d(0px, 300px, 0px)"};
  opacity: ${props => (props.trigger ? "1" : "0")};
  transition: opacity 0.5s linear;
  transition: transform 0.5s ease;
`;

const TextTitle = styled.div`
  position: relative;
  color: ${props => props.theme.whiteColor};
  text-align: start;
  font-size: 18px;
  font-weight: 600;
  padding: 16px 16px;
`;
const TextSubTitle = styled.div`
  position: relative;
  color: ${props => props.theme.whiteColor};
  text-align: start;
  font-size: 16px;
  font-weight: 500;
  padding: 16px 16px;
`;
export default ({ height = 600, id, title, subTitle, thumbnail, trigger }) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <ImgWrapper height={height}>
          <Img src={thumbnail} />

          <ContentLink
            to={{
              pathname: `/about/${id}`,
              state: {
                id
              }
            }}
          >
            <TextWrapper trigger={trigger}>
              <TextTitle>{title}</TextTitle>
              <TextSubTitle>{subTitle}</TextSubTitle>
            </TextWrapper>
          </ContentLink>
        </ImgWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};
