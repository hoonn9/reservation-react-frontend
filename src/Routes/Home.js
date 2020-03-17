import React, { useEffect } from "react";
import styled from "styled-components";
import EventBanner from "../Components/Banner/Event/Banner";
import Search from "../Components/Reservation/Search";
import Popup from "../Components/Popup/Popup";
import NoticeBanner from "../Components/Banner/Notice";
import { useQuery } from "@apollo/react-hooks";
import { SEE_POPUP } from "../SharedQueries";
import GlobalText from "../GlobalText";
import { useState } from "react";

const Container = styled.div`
  position: relative;
  width: 100%;
`;
const Wrapper = styled.div`
  display: block;
`;
const TopImgContainer = styled.div`
  width: 100%;
  height: ${props =>
    props.platform === "desktop"
      ? `${props.screenSize.height * 2}px`
      : "480px"};
  background-color: black;
`;
const TopImgWrapper = styled.div`
  position: ${props => (props.platform === "desktop" ? "fixed" : "relative")};
  width: 100%;
  height: ${props =>
    props.platform === "desktop" ? `${props.screenSize.height}px` : "480px"};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  opacity: ${props => 1 - props.scrollY / 1000};
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

const SearchWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: ${props =>
    props.platform === "desktop" ? `${props.screenSize.height}px` : "480px"};
  top: 670px;
  transform: ${props =>
    props.scrollY >= 700
      ? `translate3d(-1000px, 0px, 0px)`
      : "translate3d(0px, 0px, 0px)"};
  transition: transform 0.2s ease;
`;

const topImageArray = ["./images/Home/Top/1.jpg", "./images/Home/Top/2.jpg"];

export default ({ platform, screenSize }) => {
  // const [currentItem, setCurrentItem] = useState(0);

  // useEffect(() => {
  //   var to;
  //   const slide = () => {
  //     const totalFiles = topImageArray.length;
  //     if (currentItem === totalFiles - 1) {
  //       to = setTimeout(() => setCurrentItem(0), 5000);
  //     } else {
  //       to = setTimeout(() => setCurrentItem(currentItem + 1), 5000);
  //     }
  //   };

  //   slide();
  //   return () => {
  //     clearTimeout(to);
  //   };
  // }, [currentItem]);
  const globalText = GlobalText();
  const noticeId = "ck7u4vv4t00bu0797n1hkw0mg";
  const popupData = useQuery(SEE_POPUP, { fetchPolicy: "network-only" });

  const [scrollY, setSrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const { pageYOffset } = window;
      console.log(pageYOffset);
      setSrollY(pageYOffset);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <TopImgContainer platform={platform} screenSize={screenSize}>
        <TopImgWrapper
          platform={platform}
          screenSize={screenSize}
          scrollY={scrollY}
        >
          <TopImg src={topImageArray[0]} showing={1} />
        </TopImgWrapper>

        {platform === "desktop" ? (
          <SearchWrapper
            platform={platform}
            screenSize={screenSize}
            scrollY={scrollY}
          >
            <Search type="widget" />{" "}
          </SearchWrapper>
        ) : null}
      </TopImgContainer>
      {popupData.error ? null : popupData.loading ? null : (
        <Popup data={popupData.data} />
      )}

      <Wrapper>
        <EventBanner screenSize={screenSize} />
      </Wrapper>

      <Wrapper>
        <NoticeBanner globalText={globalText} noticeId={noticeId} />
      </Wrapper>
    </Container>
  );
};
