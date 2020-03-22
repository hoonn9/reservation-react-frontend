import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getUri } from "../Utils";

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
  height: 600px;
  overflow: hidden;
  position: relative;
  padding-bottom: 67%;
`;

const TextWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  right: 0;
  width: 100%;
  line-height: normal;
  min-height: 130px;
  z-index: 150;
  background: rgba(0, 0, 0, 0.5);
`;

const TextTitle = styled.dt`
  color: ${props => props.theme.whiteColor};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;
const TextSubTitle = styled.dd`
  color: ${props => props.theme.whiteColor};
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`;
const TextPeriod = styled.dd``;
export default ({ id, type, title, subTitle, period, thumbnail }) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <ImgWrapper>
          <Img src={getUri() + thumbnail} />

          <ContentLink
            to={{
              pathname: `/event/${id}`,
              state: {
                id
              }
            }}
          >
            <TextWrapper>
              <dl>
                <TextTitle>{title}</TextTitle>
                <TextSubTitle>{subTitle}</TextSubTitle>
                <TextPeriod>{period}</TextPeriod>
              </dl>
            </TextWrapper>
          </ContentLink>
        </ImgWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};
