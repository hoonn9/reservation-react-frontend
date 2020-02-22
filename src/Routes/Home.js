import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  vertical-align: top;
`;
const Wrapper = styled.div``;
const TopImgWrapper = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
const TopImg = styled.img`
  max-width: 100%;
  width: 100%;
  height: 400px;
  position: absolute;
  top: 0;
  background-image: url(${props => props.src});
  background-size: contain;
  background-position: center;
  opacity: ${props => (props.showing ? 1 : 0)};
  transition: opacity 0.5s linear;
`;
export default () => {
  const topImageArray = ["./images/Home/Top/1.jpg", "./images/Home/Top/2.jpg"];
  const [currentItem, setCurrentItem] = useState(0);

  const slide = () => {
    const totalFiles = topImageArray.length;
    if (currentItem === totalFiles - 1) {
      setTimeout(() => setCurrentItem(0), 5000);
    } else {
      setTimeout(() => setCurrentItem(currentItem + 1), 5000);
    }
  };

  useEffect(() => {
    slide();
  }, [currentItem]);

  return (
    <Container>
      <Wrapper>
        <TopImgWrapper>
          {topImageArray &&
            topImageArray.map((img, index) => (
              <TopImg key={index} src={img} showing={index === currentItem} />
            ))}
        </TopImgWrapper>

        <div>home</div>
      </Wrapper>
    </Container>
  );
};
