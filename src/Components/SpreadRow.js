import React from "react";
import styled from "styled-components";
import AnimateHeight from "react-animate-height";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useState } from "react";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  border: 1px ${(props) => props.theme.liteGreyColor} solid;
`;
const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 16px;
  align-items: center;
`;
const Title = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 64px;
`;
const MoreButtonWrapper = styled.div`
  position: absolute;
  width: 64px;
  right: 0;
`;
const MoreButton = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;
const MoreIcon = styled(ExpandMoreIcon)`
  height: 32px !important;
`;
const ContentWrapper = styled.div`
  padding: 16px;
  background-color: ${(props) => props.theme.superLiteGreyColor};
`;

export default ({ title, content }) => {
  const duration = 300;
  const [moreToggle, setMoreToggle] = useState(false);
  const moreOnClick = () => setMoreToggle(!moreToggle);
  return (
    <Wrapper>
      <TitleWrapper onClick={moreOnClick}>
        <Title>{title}</Title>
        <MoreButtonWrapper>
          <MoreButton>
            <MoreIcon />
          </MoreButton>
        </MoreButtonWrapper>
      </TitleWrapper>
      <AnimateHeight duration={duration} height={moreToggle ? "auto" : 0}>
        <ContentWrapper>{content}</ContentWrapper>
      </AnimateHeight>
    </Wrapper>
  );
};
