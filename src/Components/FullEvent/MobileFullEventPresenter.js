import React from "react";
import styled from "styled-components";
import { getUri } from "../../Utils";

const Wrapper = styled.div``;
const TopViewWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 15px;
  overflow: hidden;
`;

const TopViewImage = styled.img`
  background-size: cover;
  position: relative;
  display: block;
  width: auto;
  height: 480px;
`;

const TopViewDetailWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  color: ${props => props.theme.whiteColor};
`;
const TopViewDescWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 150px;
`;

const TopViewDescLeft = styled.div`
  float: left;
  width: 100%;
`;

const TopViewDescLeftInner = styled.div`
  width: 100%;
  vertical-align: middle;
  padding: 32px 8px;
`;

const TopViewDescRight = styled.div`
  float: right;
  text-align: right;
  width: 100%;
`;

const TopViewDescRightInner = styled.div`
  width: 100%;
  padding: 16px 8px;
  text-align: end;
`;

const TopViewType = styled.div`
  float: none;
  display: inline-block;
  background: rgba(0, 0, 0, 0.7);
  height: 32px;
  font-size: 13px;
  text-align: center;
  padding: 8px 16px;
  font-weight: 700;
`;

const TopViewTitle = styled.h2`
  font-size: 21px;
  font-weight: 700;
  margin-top: 10px;
`;

const TopViewPeriod = styled.p`
  font-size: 16px;
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
        <TopViewImage src={getUri() + thumbnail} />
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
