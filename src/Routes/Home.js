import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "../Components/Banner/Banner";
import Widget from "../Components/Reservation/Widget";

const Container = styled.div`
  position: relative;
  width: 100%;
`;
const Wrapper = styled.div`
  display: block;
`;
const TopImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${props => (props.platform === "desktop" ? "1080px" : "480px")};
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
const TopImg = styled.img`
  max-width: 100%;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-image: url(${props => props.src});
  background-size: contain;
  background-position: center;
  opacity: ${props => (props.showing ? 1 : 0)};
  transition: opacity 0.5s linear;
`;
const topImageArray = ["./images/Home/Top/1.jpg", "./images/Home/Top/2.jpg"];
export default ({ platform }) => {
  const [currentItem, setCurrentItem] = useState(0);
  const [isOnline, setIsOnline] = useState(true);
  console.log(platform);
  useEffect(() => {
    var to;
    const slide = () => {
      const totalFiles = topImageArray.length;
      if (currentItem === totalFiles - 1) {
        to = setTimeout(() => setCurrentItem(0), 5000);
      } else {
        to = setTimeout(() => setCurrentItem(currentItem + 1), 5000);
      }
    };

    slide();
    return () => {
      clearTimeout(to);
    };
  }, [currentItem]);

  return (
    <Container>
      {platform === "desktop" ? (
        <TopImgWrapper platform={platform}>
          {topImageArray &&
            topImageArray.map((img, index) => (
              <TopImg key={index} src={img} showing={index === currentItem} />
            ))}
          <Widget />
        </TopImgWrapper>
      ) : (
        <TopImgWrapper>
          {<TopImg src={topImageArray[0]} showing={1} platform={platform} />}
        </TopImgWrapper>
      )}

      <Wrapper>
        <Banner />
      </Wrapper>
    </Container>
  );
};
