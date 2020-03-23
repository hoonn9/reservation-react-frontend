import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GalleryPresenter from "./GalleryPresenter";
import { switchPlatform, getUri } from "../../../Utils";
import TouchSlideView from "../../TouchSlideView";

const Title = styled.h2`
  font-size: 42px;
  padding: 32px 0px;
  margin-left: 12.5%;
`;
const MobileTitle = styled.h2`
  font-size: 31px;
  padding: 16px 0px;
  margin-left: 5%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

export default ({ platform, screenSize, galleryData }) => {
  const [currentItem, setCurrentItem] = useState(0);
  const [dotItem, setDotItem] = useState(0);
  //container
  const divide = 1;
  const wrapperWidth = platform === "desktop" ? 60 : 100;
  const contentPadding = platform === "desktop" ? 24 : 0;
  const contentHeight = platform === "desktop" ? 600 : 480;
  const imgWidth = ((screenSize.width / 100) * wrapperWidth) / divide;

  const [transValue, setTransValue] = useState(imgWidth);
  const [slideSpeed, setSlideSpeed] = useState(0.3);

  const [prevButtonTrigger, setPrevButtonTrigger] = useState(true);
  const [nextButtonTrigger, setNextButtonTrigger] = useState(true);

  const centerProp = (screenSize.width - imgWidth) / 2;

  const viewArray = [];
  const uri = getUri();
  galleryData.files.forEach((e, i) => {
    viewArray.push({
      url: uri + e.url,
      title: "Title " + i,
      subTitle: "SubTitle " + i
    });
  });

  useEffect(() => {
    setTransValue(((currentItem + 1) * imgWidth) / divide);
  }, [screenSize, divide, setTransValue, currentItem, imgWidth]);

  return (
    <Wrapper>
      {switchPlatform(
        platform,
        <Title>ROOM</Title>,
        <MobileTitle>ROOM</MobileTitle>
      )}
      {platform === "desktop" ? (
        <GalleryPresenter
          id={galleryData.id}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
          screenSize={screenSize}
          wrapperWidth={wrapperWidth}
          imgWidth={imgWidth}
          transValue={transValue}
          setTransValue={setTransValue}
          slideSpeed={slideSpeed}
          setSlideSpeed={setSlideSpeed}
          viewArray={viewArray}
          prevButtonTrigger={prevButtonTrigger}
          setPrevButtonTrigger={setPrevButtonTrigger}
          nextButtonTrigger={nextButtonTrigger}
          setNextButtonTrigger={setNextButtonTrigger}
          centerProp={centerProp}
          dotItem={dotItem}
          setDotItem={setDotItem}
          contentPadding={contentPadding}
          contentHeight={contentHeight}
        />
      ) : (
        <TouchSlideView data={viewArray} />
      )}
    </Wrapper>
  );
};
