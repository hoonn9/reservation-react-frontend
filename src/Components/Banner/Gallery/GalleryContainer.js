import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GalleryPresenter from "./GalleryPresenter";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

export default ({ screenSize, galleryData }) => {
  const [currentItem, setCurrentItem] = useState(0);
  const [dotItem, setDotItem] = useState(0);
  //container
  const divide = 1;
  const wrapperWidth = 60;
  const imgWidth = ((screenSize.width / 100) * wrapperWidth) / divide;

  const [transValue, setTransValue] = useState(imgWidth);
  const [slideSpeed, setSlideSpeed] = useState(0.3);

  const [prevButtonTrigger, setPrevButtonTrigger] = useState(true);
  const [nextButtonTrigger, setNextButtonTrigger] = useState(true);

  const centerProp = (screenSize.width - imgWidth) / 2;

  useEffect(() => {
    setTransValue(((currentItem + 1) * imgWidth) / divide);
  }, [screenSize, divide, setTransValue, currentItem, imgWidth]);

  return (
    <Wrapper>
      <GalleryPresenter
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        screenSize={screenSize}
        wrapperWidth={wrapperWidth}
        imgWidth={imgWidth}
        transValue={transValue}
        setTransValue={setTransValue}
        slideSpeed={slideSpeed}
        setSlideSpeed={setSlideSpeed}
        galleryData={galleryData}
        prevButtonTrigger={prevButtonTrigger}
        setPrevButtonTrigger={setPrevButtonTrigger}
        nextButtonTrigger={nextButtonTrigger}
        setNextButtonTrigger={setNextButtonTrigger}
        centerProp={centerProp}
        dotItem={dotItem}
        setDotItem={setDotItem}
      />
    </Wrapper>
  );
};
