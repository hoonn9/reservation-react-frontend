import React from "react";
import styled from "styled-components";
import Search from "../../Components/Reservation/Search";
import Title from "../../Components/Title";

const Container = styled.div`
  position: relative;
  padding-bottom: 150px;
  width: 100%;
  margin: 0 auto;
`;
export default ({
  isLoggedIn,
  platform,
  init,
  screenSize,
  checkOut,
  checkIn,
  typeCount,
  userCount,
  subCount,
  globalText,
  containerRef
}) => {
  return (
    <>
      <Container ref={containerRef}>
        <Title platform={platform} text={globalText.text_reserve} />
        <Search
          isLoggedIn={isLoggedIn}
          platform={platform}
          init={init}
          screenSize={screenSize}
          checkIn={checkIn}
          checkOut={checkOut}
          typeCount={typeCount}
          userCount={userCount}
          subCount={subCount}
          containerRef={containerRef}
        />
      </Container>
    </>
  );
};
