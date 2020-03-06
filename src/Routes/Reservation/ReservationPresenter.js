import React from "react";
import styled from "styled-components";
import Search from "../../Components/Reservation/Search";

const Container = styled.div`
  position: relative;
  padding-bottom: 364px;
`;
const Title = styled.div`
  display: inline-block;
  font-size: 46px;
  color: #333;
  font-weight: normal;
  padding: 32px 32px;
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
      <Title>{globalText.text_reserve}</Title>
      <Container ref={containerRef}>
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
