import {
  faStarHalfStroke,
  faStar,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components/macro";

export default function Details({ detail, handeShowDetails }) {
  const [iShideDetails, setIsHideDetails] = useState(false);
  let stars = "";
  function rate(num) {
    const newNum = num / 2;
    const intNum = Math.floor(newNum);
    console.log(intNum);
    for (var i = 1; i <= newNum; i++) {
      stars += <RateStart icon={faStar} />;
    }
    if (num % 2 !== 0) stars += <RateStart icon={faStarHalfStroke} />;

    // return newNum;
  }
  function handelHideDetails() {
    setIsHideDetails(true);
    handeShowDetails(false);
  }
  return (
    <DetailsContainer iShideDetails={iShideDetails}>
      <CloseBtn icon={faClose} onClick={handelHideDetails} />
      <MovieInfoContainer>
        {/* title */}
        <Title>{detail.original_title || detail.original_name}</Title>
        <Desc>{detail.overview}</Desc>
        <PlayButton>Play</PlayButton>
        {/* description */}
        {/* rating */}
        {/* number of vote */}
        {/* paly button */}
      </MovieInfoContainer>
      <ImageContainer>
        <Overly></Overly>
        <Image
          src={`https://image.tmdb.org/t/p/original${
            detail.backdrop_path || "/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          }`}
        />
      </ImageContainer>
    </DetailsContainer>
  );
}
const DetailsContainer = styled.div`
  display: ${(props) => (props.iShideDetails ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  min-height: 350px;
  width: 80%;
  padding: 0;
  margin-left: auto;
  position: relative;
  @media (max-width: 992px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    width: 100%;
  }
`;
const CloseBtn = styled(FontAwesomeIcon)`
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: black;
  border-radius: 50%;
  padding: 8px;
  z-index: 2;
  transition: var(--mainTransition);
  &:hover {
    background-color: red;
  }
`;
const Overly = styled.div``;
const ImageContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  ::after {
    content: "";
    position: absolute;
    pointer-events: none;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 37%
    );
  }

  @media (max-width: 768px) {
    width: 100%;
    ::after {
      background: rgb(0, 0, 0);
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0) 20%
      );
    }
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  width: 70%;
  gap: 30px;
  @media (max-width: 768px) {
    align-items: center;
    width: 90%;
    margin: 0 auto;
    padding-left: 0px;
    gap: 20px;
  }
`;
const Title = styled.div`
  font-size: 35px;
  font-weight: bold;
  letter-spacing: 5px;
  @media (max-width: 992px) {
    font-size: 25px;
    letter-spacing: 0;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    letter-spacing: 0;
  }
`;
const Desc = styled.div`
  width: 60%;
  text-align: justify;
  line-height: 1.5;
  font-size: 13px;
  @media (max-width: 992px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const RateStart = styled(FontAwesomeIcon)`
  color: white;
`;
const PlayButton = styled.button`
  cursor: pointer;
  width: fit-content;
  background-color: red;
  color: white;
  border: none;
  outline: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 18px;
  font-weight: bold;
  transition: var(--mainTransition);
  &:hover {
    background-color: darkred;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
