import React from "react";
import styled from "styled-components";
import MainContainer from "./MainContainer";

export default function Footer() {
  return (
    <FooterContainer>
      <MainContainer>
        <p>
          <a href="#">Questions? Contact us.</a>
        </p>

        <LinksContainer>
          <a href="#">FAQ</a>
          <a href="#">Gift Card Terms</a>
          <a href="#">Help Center</a>
          <a href="#">Account</a>
          <a href="#">Media Center</a>
          <a href="#">Investor Relations</a>
          <a href="#">Jobs</a>
          <a href="#">Ways to Watch</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Account</a>
          <a href="#">Corporate Information</a>
          <a href="#">Contact Us</a>
          <a href="#">Speed Test</a>
          <a href="#">Legal Notices</a>
          <a href="#">Only on Netflix</a>
        </LinksContainer>
        <p>
          <a href="#">Netflix Morocco</a>
        </p>
      </MainContainer>
    </FooterContainer>
  );
}
const FooterContainer = styled.div`
  border-top: 8px solid #232323;
  padding: 30px 0;
  > div p {
    margin: 30px 0;
  }
`;
const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
