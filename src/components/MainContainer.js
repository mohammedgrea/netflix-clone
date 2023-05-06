import React from "react";
import styled from "styled-components";

export default function MainContainer({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  padding-inline: 15px;
  margin: 0 auto;
  z-index: 10;

  @media (min-width: 768px) {
    width: 750px;
    /* width: 100%; */
    padding-inline: 5px;
  }
  @media (min-width: 992px) {
    width: 870px;
  }
  @media (min-width: 1200px) {
    width: 1150px;
  }
`;
