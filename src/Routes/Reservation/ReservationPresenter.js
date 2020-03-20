import React from "react";
import styled from "styled-components";
import Search from "../../Components/Reservation/Search";

const Container = styled.div`
  position: relative;
  padding-bottom: 150px;
  width: 75%;
  margin: 0 auto;
`;
const Title = styled.div`
  display: inline-block;
  font-size: 46px;
  color: #333;
  font-weight: normal;
  padding: 32px 0px;
`;
export default ({
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
        <Title>{globalText.text_reserve}</Title>
        <Search
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
