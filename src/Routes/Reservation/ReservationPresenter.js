import React from "react";
import styled from "styled-components";
import Result from "../../Components/Reservation/Result";
import Search from "../../Components/Reservation/Search";
const Container = styled.div``;
const Title = styled.div`
  display: inline-block;
  font-size: 46px;
  color: #333;
  font-weight: normal;
  padding: 32px 32px;
`;
export default ({ data, checkOut, checkIn }) => {
  console.log(data);
  //   const reservationArray = searchType;

  //   const compareCheckIn = checkIn.split("T")[0];
  //   const compareCheckOut = checkOut.split("T")[0];
  //   let typeArray = {};
  //   reservationArray.map(reservation => {
  //     const { id: typeId, typeCount, reservations } = reservation;
  //     typeArray[typeId] = 0;
  //     for (let i = 0; i < reservations.length; i++) {
  //       if (
  //         compareCheckIn <= reservations[i].checkIn.split("T")[0] &&
  //         compareCheckOut >= reservations[i].checkOut.split("T")[0]
  //       ) {
  //         typeArray[typeId] += 1;
  //         if (typeArray[typeId] > typeCount - 1) {
  //           break;
  //         }
  //       }
  //     }
  //   });
  //   console.log(typeArray);
  return (
    <>
      <Title>예약</Title>
      <Container>
        <Search />
        {data !== undefined ? <Result searchType={data.searchType} /> : <></>}
      </Container>
    </>
  );
};
