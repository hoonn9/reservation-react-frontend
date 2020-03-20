import React, { useEffect } from "react";
import styled from "styled-components";
import EventBanner from "../Components/Banner/Event/Banner";
import Search from "../Components/Reservation/Search";
import Popup from "../Components/Popup/Popup";
import NoticeBanner from "../Components/Banner/Notice";
import GalleryBanner from "../Components/Banner/Gallery";
import { useQuery } from "@apollo/react-hooks";
import { SEE_POPUP } from "../SharedQueries";
import GlobalText from "../GlobalText";
import { SEE_TYPE } from "./About/AboutQueries";

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
    props.platform === "desktop" ? `${props.screenSize.height}px` : "480px"};
  background-color: black;
`;
const TopImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${props =>
    props.platform === "desktop" ? `${props.screenSize.height}px` : "480px"};
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

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${props =>
    props.platform === "desktop" ? `${props.screenSize.height}px` : "auto"};
  top: ${props => (props.platform === "desktop" ? "670px" : "0px")};
  padding: ${props => (props.platform === "desktop" ? "0px 32px" : "0px")};
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
  const galleryData = useQuery(SEE_TYPE, {});

  return (
    <Container>
      <TopImgContainer platform={platform} screenSize={screenSize}>
        <TopImgWrapper platform={platform} screenSize={screenSize}>
          <TopImg src={topImageArray[0]} showing={1} />
          {platform === "desktop" ? (
            <SearchWrapper platform={platform} screenSize={screenSize}>
              <Search platform={platform} type="widget" />{" "}
            </SearchWrapper>
          ) : null}
        </TopImgWrapper>
      </TopImgContainer>
      {platform === "mobile" ? (
        <SearchWrapper platform={platform} screenSize={screenSize}>
          <Search platform={platform} type="widget" />{" "}
        </SearchWrapper>
      ) : null}
      {popupData.error ? null : popupData.loading ? null : (
        <Popup data={popupData.data} />
      )}

      {galleryData.error ? null : galleryData.loading ? null : (
        <Wrapper
          style={{
            backgroundColor: "transparent",
            marginTop: platform === "desktop" ? "80px" : "20px"
          }}
        >
          <GalleryBanner
            platform={platform}
            screenSize={screenSize}
            galleryData={galleryData.data.seeType[0]}
          />
        </Wrapper>
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
