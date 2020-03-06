import React from "react";
import styled from "styled-components";
const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  display: block;
  width: 50%;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: 46px;
  font-weight: 500;
  padding: 16px 0px;
  border-bottom: solid 2px ${props => props.theme.superLiteGreyColor};
`;

const LocationWrapper = styled.div``;

const LocationTextWrapper = styled.div`
  padding: 8px 0px;
`;
const LocationTitle = styled.div`
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  min-width: 120px;
  color: ${props => props.theme.greyColor};
`;
const LocationText = styled.div`
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.blackColor};
`;

export default ({ MemoMap, globalText }) => {
  return (
    <Container>
      <Wrapper>
        <Title>{globalText.text_position}</Title>
        {MemoMap}
        <LocationWrapper>
          <LocationTextWrapper>
            <LocationTitle>{globalText.text_address}</LocationTitle>
            <LocationText>{globalText.text_company_address}</LocationText>
          </LocationTextWrapper>
          <LocationTextWrapper>
            <LocationTitle>{globalText.text_tel}</LocationTitle>
            <LocationText>{globalText.text_company_tel}</LocationText>
          </LocationTextWrapper>
          <LocationTextWrapper>
            <LocationTitle>{globalText.text_email}</LocationTitle>
            <LocationText>{globalText.text_company_email}</LocationText>
          </LocationTextWrapper>
        </LocationWrapper>
      </Wrapper>
    </Container>
  );
};
