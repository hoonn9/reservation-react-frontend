import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const TopViewWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 30px;
`;

const TopViewImage = styled.img`
  background-size: cover;
  position: relative;
  display: block;
  width: 100%;
  height: 560px;
`;

const TopViewDetailWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
`;
const TopViewDescWrapper = styled.div`
  position: relative;
  width: 1280px;
  margin: 0 auto;
  padding: 0 30px;
  height: 190px;
`;

const TopViewDescLeft = styled.div`
  float: left;
  width: 70%;
`;

const TopViewDescLeftInner = styled.div`
  width: 75%;
  display: table-cell;
  vertical-align: middle;
  height: 190px;
`;

const TopViewDescRight = styled.div`
  float: right;
  text-align: right;
  width: 30%;
`;

const TopViewDescRightInner = styled.div`
  width: 25%;
  display: table-cell;
  vertical-align: middle;
  height: 190px;
`;

const TopViewType = styled.div`
  float: none;
  display: inline-block;
  background: rgba(0, 0, 0, 0.5);
  height: 44px;
  font-size: 13px;
  text-align: center;
  padding: 15px 15px 13px;
  color: #fff;
  font-weight: 700;
`;

const TopViewTitle = styled.h2`
  font-size: 32px;
  color: #fff;
  font-weight: 700;
  margin-top: 10px;
`;

const TopViewPeriod = styled.p`
  font-size: 22px;
  color: #fff;
  font-weight: 700;
  line-height: 1.6em;
`;

export default ({
  eventType,
  thumbnail,
  title,
  period,
  subTitle,
  content,
  files
}) => {
  return (
    <Wrapper>
      <TopViewWrapper>
        <TopViewImage src={"/images/Event/5.jpg"} />
        <TopViewDetailWrapper>
          <TopViewDescWrapper>
            <TopViewDescLeft>
              <TopViewDescLeftInner>
                <TopViewType>{eventType}</TopViewType>
                <TopViewTitle>{title}</TopViewTitle>
              </TopViewDescLeftInner>
            </TopViewDescLeft>
            <TopViewDescRight>
              <TopViewDescRightInner>
                <TopViewPeriod>{period}</TopViewPeriod>
              </TopViewDescRightInner>
            </TopViewDescRight>
          </TopViewDescWrapper>
        </TopViewDetailWrapper>
      </TopViewWrapper>
    </Wrapper>
  );
};
