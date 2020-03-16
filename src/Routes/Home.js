import React from "react";
import styled from "styled-components";
import Banner from "../Components/Banner/Banner";
import Search from "../Components/Reservation/Search";
import Popup from "../Components/Popup/Popup";
import { useQuery } from "react-apollo-hooks";
import { SEE_POPUP } from "../SharedQueries";

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
  const popupData = useQuery(SEE_POPUP, { fetchPolicy: "network-only" });

  return (
    <Container>
      {platform === "desktop" ? (
        <TopImgWrapper platform={platform} screenSize={screenSize}>
          <TopImg src={topImageArray[0]} showing={1} />
          <Search type="widget" />
        </TopImgWrapper>
      ) : (
        <TopImgWrapper platform={platform} screenSize={screenSize}>
          <TopImg src={topImageArray[0]} showing={1} />
        </TopImgWrapper>
      )}
      {popupData.error ? null : popupData.loading ? null : (
        <Popup data={popupData.data} />
      )}

      <Wrapper>
        <Banner screenSize={screenSize} />
      </Wrapper>
    </Container>
  );
};
