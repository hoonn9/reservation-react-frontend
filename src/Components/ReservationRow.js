import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { dateConverter, dateDetailConverter, numberWithCommas } from "../Utils";
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
`;
const MobileWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const ThumbnailWrapper = styled.div`
  position: relative;
  float: left;
  width: 30%;
  height: 100%;
  padding: 16px 0px;
  overflow: hidden;
  cursor: pointer;
`;
const MobileThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  cursor: pointer;
`;
const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;
const InfoWrapper = styled.div`
  position: relative;
  float: left;
  width: 70%;
  height: 100%;
  padding: 32px;
`;
const MobileInfoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 8px;
`;
const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const TextWrapper = styled.div`
  width: 100%;
  padding: 8px 0px;
`;
const TitleText = styled.div`
  display: inline-block;
  font-size: 21px;
  font-weight: 500;
  min-width: 150px;
`;
const ContentText = styled.div`
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  min-width: 200px;
`;
const PriceText = styled.div`
  display: inline-block;
  font-size: 21px;
  font-weight: 500;
  color: ${(props) => props.theme.blueColor};
`;
const MobileTitleText = styled.div`
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  min-width: 120px;
`;
const MobileContentText = styled.div`
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
`;
const MobilePriceText = styled.div`
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.blueColor};
`;
export default ({
  platform,
  id,
  price,
  roomName,
  thumbnail,
  packName,
  createdAt,
  checkIn,
  checkOut,
}) => {
  return (
    <>
      {platform === "desktop" ? (
        <Link
          to={{
            pathname: "/check/reservation",
            state: {
              id,
            },
          }}
        >
          <Wrapper>
            <ThumbnailWrapper>
              <Thumbnail src={thumbnail} />
            </ThumbnailWrapper>
            <InfoWrapper>
              <ContentWrapper>
                <TextWrapper>
                  <TitleText>객실 : </TitleText>
                  <ContentText>{roomName}</ContentText>
                </TextWrapper>
                <TextWrapper>
                  <TitleText>패키지 : </TitleText>
                  <ContentText>{packName}</ContentText>
                </TextWrapper>
                <TextWrapper>
                  <TitleText> 예약일 : </TitleText>
                  <ContentText>{dateConverter(createdAt)}</ContentText>
                </TextWrapper>
                <TextWrapper>
                  <TitleText>체크인 : </TitleText>
                  <ContentText>{dateDetailConverter(checkIn)}</ContentText>
                </TextWrapper>
                <TextWrapper>
                  <TitleText>체크아웃 : </TitleText>
                  <ContentText>{dateDetailConverter(checkOut)}</ContentText>
                </TextWrapper>
                <TextWrapper>
                  <TitleText>가격 : </TitleText>
                  <PriceText>{numberWithCommas(price)}원</PriceText>
                </TextWrapper>
              </ContentWrapper>
            </InfoWrapper>
          </Wrapper>
        </Link>
      ) : (
        <Link
          to={{
            pathname: "/check/reservation",
            state: {
              id,
            },
          }}
        >
          <MobileWrapper>
            <MobileThumbnailWrapper>
              <Thumbnail src={thumbnail} />
            </MobileThumbnailWrapper>
            <MobileInfoWrapper>
              <ContentWrapper>
                <TextWrapper>
                  <MobileTitleText>객실 : </MobileTitleText>
                  <MobileContentText>{roomName}</MobileContentText>
                </TextWrapper>
                <TextWrapper>
                  <MobileTitleText>패키지 : </MobileTitleText>
                  <MobileContentText>{packName}</MobileContentText>
                </TextWrapper>
                <TextWrapper>
                  <MobileTitleText> 예약일 : </MobileTitleText>
                  <MobileContentText>
                    {dateConverter(createdAt)}
                  </MobileContentText>
                </TextWrapper>
                <TextWrapper>
                  <MobileTitleText>체크인 : </MobileTitleText>
                  <MobileContentText>
                    {dateDetailConverter(checkIn)}
                  </MobileContentText>
                </TextWrapper>
                <TextWrapper>
                  <MobileTitleText>체크아웃 : </MobileTitleText>
                  <MobileContentText>
                    {dateDetailConverter(checkOut)}
                  </MobileContentText>
                </TextWrapper>
                <TextWrapper>
                  <MobileTitleText>가격 : </MobileTitleText>
                  <MobilePriceText>{numberWithCommas(price)}원</MobilePriceText>
                </TextWrapper>
              </ContentWrapper>
            </MobileInfoWrapper>
          </MobileWrapper>
        </Link>
      )}
    </>
  );
};
