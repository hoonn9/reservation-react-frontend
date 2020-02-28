import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  position: relative;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: inline-block;
  position: relative;
`;

const ContentLink = styled(Link)``;

const Img = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ImgWrapper = styled.div`
  display: block;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding-bottom: 67%;
`;

const TextWrapper = styled.div`
  width: 100%;
  max-width: 390px;
  padding-top: 20px;
  line-height: normal;
  min-height: 130px;
`;

const TextTitle = styled.dt``;
const TextSubTitle = styled.dd``;
const TextPeriod = styled.dd``;

export default ({ id, type, title, subTitle, period, thumbnail }) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <ImgWrapper>
          <ContentLink
            to={{
              pathname: `/event/${id}`,
              state: {
                id
              }
            }}
          >
            <Img
              src={
                "https://www.lotteresort.com/static/upload/images/20200203/bc940f98-14ea-4536-838e-863b82291cbc.jpg"
              }
            />
          </ContentLink>
        </ImgWrapper>
        <TextWrapper>
          <dl>
            <TextTitle>{title}</TextTitle>
            <TextSubTitle>{subTitle}</TextSubTitle>
            <TextPeriod>{period}</TextPeriod>
          </dl>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};
