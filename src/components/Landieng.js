import React from "react";
import styled from "styled-components/macro";
import GetStarted from "./GetStarted";
import LandiengContainer from "./LandiengContainer";
import MainContainer from "./MainContainer";

export default function Landieng() {
  return (
    <LandiengContainer>
      <MainContainer>
        <IntoText>
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Plans now start at 35 MAD/month.</h2>
        </IntoText>
        <GetStarted />
      </MainContainer>
      <Overly></Overly>
    </LandiengContainer>
  );
}

const IntoText = styled.div`
  > h1 {
    font-size: 3rem;
    font-weight: bold;
    margin: 100px 0 10px 0;
  }
  > h2 {
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    > h1 {
      font-size: 2rem;
      font-weight: bold;
      margin: 100px 0 10px 0;
    }
    > h2 {
      font-size: 1.1rem;
    }
  }
  text-align: center;
  margin-bottom: 30px;
`;
const Overly = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  /* background: rgb(0, 0, 0);
  background: linear-gradient(
    164deg,
    rgba(0, 0, 0, 2) 0%,
    rgba(0, 0, 0, 0.3) 51%,
    rgba(0, 0, 0, 2) 100%
  ); */
  /* pointer-events: none; */
`;
