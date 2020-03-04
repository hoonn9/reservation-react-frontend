import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: block;
  width: 80%;
`;
const ContentWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 350px;
  clear: both;
`;
const ThumbnailWrapper = styled.div`
  position: relative;
  float: left;
  width: 30%;
  height: 100%;
  padding: 16px 0px;
  overflow: hidden;
`;
const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;
const InfoWrapper = styled.div`
  position: relative;
  float: left;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  padding: 32px;
`;
const InfoCenter = styled.div``;
const NameText = styled.div`
  display: block;
  font-size: 28px;
  font-weight: 600;
  padding: 16px 0;
`;
const PriceText = styled.div`
  display: block;
  font-size: 21px;
  font-weight: 500;
  color: ${props => props.theme.blueColor};
  padding: 16px 0;
`;

export default ({ searchType }) => {
  return (
    <Container>
      <Wrapper>
        {searchType.map(type => {
          return type.id ? (
            <ContentWrapper>
              <ThumbnailWrapper>
                <Thumbnail src={`./images/About/${type.id}/1.jpg`} />
              </ThumbnailWrapper>
              <InfoWrapper>
                <InfoCenter>
                  <NameText>{type.typeName}</NameText>
                  <PriceText>￦ {type.price} ~</PriceText>
                </InfoCenter>
              </InfoWrapper>
            </ContentWrapper>
          ) : null;
        })}
      </Wrapper>
    </Container>
  );
};
