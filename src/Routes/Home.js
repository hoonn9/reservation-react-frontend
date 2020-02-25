import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "../Components/Banner/Banner";
import { getSize } from "../Utils";

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
  height: 1080px;
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
export default () => {
  const [currentItem, setCurrentItem] = useState(0);

  const [isOnline, setIsOnline] = useState(true);

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
      <TopImgWrapper>
        {topImageArray &&
          topImageArray.map((img, index) => (
            <TopImg key={index} src={img} showing={index === currentItem} />
          ))}
      </TopImgWrapper>

      <Wrapper>
        <Banner />
      </Wrapper>
    </Container>
  );
};
