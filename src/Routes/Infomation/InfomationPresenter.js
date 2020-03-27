import React from "react";
import styled from "styled-components";
import Title from "../../Components/Title";
const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  margin: 0 auto;
`;

const LocationWrapper = styled.div``;

const LocationTextWrapper = styled.div`
  padding: 8px 0px;
`;
const MobileLocationTextWrapper = styled.div`
  padding: 8px 16px;
`;
const LocationTitle = styled.div`
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  min-width: 120px;
  color: ${props => props.theme.darkGreyColor};
`;
const MobileLocationTitle = styled.div`
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  min-width: 120px;
  color: ${props => props.theme.darkGreyColor};
  padding: 8px 0px;
`;
const LocationText = styled.div`
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.blackColor};
`;
const MobileLocationText = styled.div`
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.blackColor};
`;

export default ({ platform, MemoMap, globalText }) => {
  return (
    <Container>
      <Wrapper>
        <Title platform={platform} text={globalText.text_position} />
        {MemoMap}
        {platform === "desktop" ? (
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
        ) : (
          <LocationWrapper>
            <MobileLocationTextWrapper>
              <MobileLocationTitle>
                {globalText.text_address}
              </MobileLocationTitle>
              <MobileLocationText>
                {globalText.text_company_address}
              </MobileLocationText>
            </MobileLocationTextWrapper>
            <MobileLocationTextWrapper>
              <MobileLocationTitle>{globalText.text_tel}</MobileLocationTitle>
              <MobileLocationText>
                {globalText.text_company_tel}
              </MobileLocationText>
            </MobileLocationTextWrapper>
            <MobileLocationTextWrapper>
              <MobileLocationTitle>{globalText.text_email}</MobileLocationTitle>
              <MobileLocationText>
                {globalText.text_company_email}
              </MobileLocationText>
            </MobileLocationTextWrapper>
          </LocationWrapper>
        )}
      </Wrapper>
    </Container>
  );
};
