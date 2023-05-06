import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components/macro";

export default function Banner({ movie }) {
  return (
    <BannerContainer movie={movie}>
      <Container>
        <Ttile>{movie.title || " no name"}</Ttile>
        <Btns>
          <PlayButton>
            <PlayIcon icon={faCirclePlay} />
            Play
          </PlayButton>
          {/* <Button style={{ backgroundColor: "red" }}>Play</Button> */}
          <Button>My List</Button>
        </Btns>
        <Desc>
          {movie.overview.length > 150
            ? movie.overview.substring(0, 150) + "..."
            : movie.overview}
        </Desc>
      </Container>
      <Overly></Overly>
    </BannerContainer>
  );
}
const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  background-image: ${(props) =>
    `url(https://image.tmdb.org/t/p/original${props.movie.backdrop_path})`};
  background-size: cover;
  background-position: center top;
  height: 580px;
  position: relative;
  @media (max-width: 768px) {
    background-image: ${(props) =>
      `url(https://image.tmdb.org/t/p/original${props.movie.poster_path})`};
    height: 480px;
    align-items: flex-end;
    padding-bottom: 50px;
  }
`;
const Container = styled.div`
  width: 500px;
  margin-left: 50px;
  z-index: 1;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin: 0px auto;
  }
`;
const PlayIcon = styled(FontAwesomeIcon)`
  padding-right: 10px;
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
const Ttile = styled.h1`
  text-transform: uppercase;
  font-family: var(--titleFontFamily);
  font-size: 50px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
const Btns = styled.div`
  margin-block: 10px;
`;

const Button = styled.button`
  cursor: pointer;
  width: fit-content;
  background-color: var(--mainInputColor);
  color: white;
  border: none;
  outline: none;
  margin-left: 10px;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 18px;
  font-weight: bold;
  transition: var(--mainTransition);
  &:hover {
    background-color: var(--secondaryColor);
  }
`;
const Desc = styled.p`
  line-height: 1.5;
  font-size: 0.9rem;
  text-align: justify;
  width: 90%;
  @media (max-width: 768px) {
    margin: 0 auto;
    width: 90%;
  }
`;
const Overly = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  pointer-events: none;
`;
