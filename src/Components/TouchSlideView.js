import React, { useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useEffect } from "react";
const ContentWrapper = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PrevButton = styled(ArrowBackIosIcon)`
  position: absolute;
  left: 16px;
  z-index: 600;
  cursor: pointer;
`;
const NextButton = styled(ArrowForwardIosIcon)`
  position: absolute;
  right: 16px;
  z-index: 600;
  cursor: pointer;
`;
const ImageWrapper = styled.div`
  height: 480px;
`;
const Image = styled.img`
  width: auto;
  height: 100%;
`;
const TextWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0px;
  width: 100%;
  height: 120px;
  background: rgba(0, 0, 0, 0.5);
  text-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.dt`
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.theme.whiteColor};
  text-align: start;
  padding: 16px 32px;
`;
const SubTitle = styled.dd`
  width: 100%;
  font-size: 18px;
  color: ${props => props.theme.whiteColor};
  text-align: start;
  padding: 16px 32px;
`;
export default ({ data, type = "banner" }) => {
  const [galleryItem, setGalleryItem] = useState(0);
  const galleryPrevOnClick = () => {
    setGalleryItem(galleryItem - 1);
  };
  const galleryNextOnClick = () => {
    setGalleryItem(galleryItem + 1);
  };
  const galleryOnChange = index => {
    if (galleryItem !== index) {
      setGalleryItem(index);
    }
  };

  useEffect(() => {
    setGalleryItem(0);
  }, [data]);

  return (
    <ContentWrapper>
      <PrevButton onClick={galleryPrevOnClick} />
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showArrows={false}
        emulateTouch
        selectedItem={galleryItem}
        onChange={galleryOnChange}
      >
        {data.map((e, i) => {
          return (
            <ImageWrapper key={i}>
              <Image src={e.url} />
              {type === "banner" ? (
                <TextWrapper>
                  <dl style={{ width: "100%" }}>
                    <Title>{e.title}</Title>
                    <SubTitle>{e.subTitle}</SubTitle>
                  </dl>
                </TextWrapper>
              ) : null}
            </ImageWrapper>
          );
        })}
      </Carousel>
      <NextButton onClick={galleryNextOnClick} />
    </ContentWrapper>
  );
};
