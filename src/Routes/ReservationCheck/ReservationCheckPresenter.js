import React from "react";
import styled from "styled-components";
import ReservationPage from "../../Components/ReservationPage";
import Title from "../../Components/Title";
import { globalText } from "../../GlobalText";
const Container = styled.div``;
export default ({ platform, data: { checkReservation } }) => {
  return (
    <Container>
      <Title platform={platform} text={globalText.text_reserve_check} />
      <ReservationPage platform={platform} data={checkReservation} />
    </Container>
  );
};
