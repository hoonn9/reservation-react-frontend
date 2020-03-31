import React from "react";
import styled from "styled-components";

export default ({ data: { checkReservation } }) => {
  console.log(checkReservation);
  return <div>{checkReservation.id}</div>;
};
