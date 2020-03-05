import React from "react";
import styled from "styled-components";
import Search from "../../Components/Reservation/Search";

const Container = styled.div``;
const Title = styled.div`
  display: inline-block;
  font-size: 46px;
  color: #333;
  font-weight: normal;
  padding: 32px 32px;
`;
export default ({
  init,
  checkOut,
  checkIn,
  typeCount,
  userCount,
  subCount,
  globalText
}) => {
  return (
    <>
      <Title>{globalText.text_reserve}</Title>
      <Container>
        <Search
          init={init}
          checkIn={checkIn}
          checkOut={checkOut}
          typeCount={typeCount}
          userCount={userCount}
          subCount={subCount}
        />
      </Container>
    </>
  );
};
