import React from "react";
import styled, { keyframes } from "styled-components";
import { Logo } from "./Icons";

const Animaition = keyframes`
    0% {
        opacity:0
    }
    50% {
        opacity:1
    }
    100% {
        opacity:0
    }
`;

const Loader = styled.div`
  animation: ${Animaition} 1s linear infinite;
  width: 100%;
  text-align: center;
  margin-top: 120px;
`;

export default () => (
  <Loader>
    <Logo size={36} />
  </Loader>
);
