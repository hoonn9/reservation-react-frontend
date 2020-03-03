import React from "react";
import styled from "styled-components";

const Container = styled.div``;

export default ({ data: { searchType }, checkOut, checkIn }) => {
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
  console.log(searchType);
  return (
    <Container>
      {searchType.map(type => {
        return type.id ? <div>{type.typeName} 가능</div> : null;
      })}
    </Container>
  );
};
