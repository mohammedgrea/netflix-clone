import React from "react";
import styled from "styled-components/macro";

export default function Landieng({ children }) {
  return (
    <LandiengContainer style={{ backgroundImage: "url('/images/bg.jpeg')" }}>
      {children}
      <Overly></Overly>
    </LandiengContainer>
  );
}

const LandiengContainer = styled.div`
  height: calc(100vh - 10rem);
  object-fit: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  background-color: red;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Overly = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
  pointer-events: none;
`;
