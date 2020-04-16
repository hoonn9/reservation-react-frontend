import React, { useState } from "react";
import styled from "styled-components";
import Head from "./Head";
import Content from "./Content";
import GlobalText from "../../../GlobalText";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default ({ screenSize, platform, eventData }) => {
  const globalText = GlobalText();
  const [currentItem, setCurrentItem] = useState(0);

  //container
  const divide = 3;
  const wrapperWidth = 75;
  const [imgWidth, setImgWidth] = useState(
    ((screenSize.width / 100) * wrapperWidth) / divide
  );
  const [transValue, setTransValue] = useState(0);

  const resetWrapper = () => {
    setTransValue(0);
  };

  // useEffect(() => {
  //   if (!loading && !error) {
  //     console.log(data.seeEvent);
  //     data.seeEvent.forEach((e) => {
  //       const img = new Image();
  //       img.src = e.thumbnail;
  //       console.log(img);
  //     });
  //   }
  // }, [loading, error]);
  return (
    <>
      {eventData ? (
        <Wrapper>
          <Head
            platform={platform}
            globalText={globalText}
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
            data={eventData}
            resetWrapper={resetWrapper}
          />
          <Content
            platform={platform}
            currentItem={currentItem}
            data={eventData}
            screenSize={screenSize}
            wrapperWidth={wrapperWidth}
            divide={divide}
            imgWidth={imgWidth}
            setImgWidth={setImgWidth}
            transValue={transValue}
            setTransValue={setTransValue}
          />
        </Wrapper>
      ) : null}
    </>
  );
};
