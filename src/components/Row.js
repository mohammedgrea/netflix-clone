import React, { useEffect, useState } from "react";
import instance from "../lib/axios";
import styled from "styled-components/macro";
import Details from "./Details";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Row({ request, title, original, id }) {
  const [movie, setMovie] = useState([]);
  const [open, setOpen] = useState(false);
  const [detail, setDeatail] = useState("false");

  useEffect(() => {
    async function fetchData() {
      const res = await instance.get(request);
      setMovie(res.data.results);
    }
    fetchData();
  }, [request]);
  function move(e) {
    const posters = document.querySelectorAll(".posters");
    posters.forEach((poster) => {
      if (poster.id === e.target.parentElement.id) {
        poster.scrollLeft += e.target.id === "left" ? -170 : 170;
      }
    });
  }
  function handeShowDetails(boll) {
    setOpen(boll);
  }
  const movies = movie?.map((poster) => (
    <Poster
      key={poster.id}
      onClick={() => {
        setDeatail(poster);
        handeShowDetails(true);
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${
          original
            ? poster.poster_path
            : poster.backdrop_path || "/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
        }`}
        alt={poster.title}
      />
    </Poster>
  ));
  return (
    <>
      <RowContainer id={id}>
        <h3>{title}</h3>
        <ScrolRight
          icon={faChevronRight}
          id="right"
          onClick={move}
          original={original}
        />
        <ScrolLeft
          icon={faChevronLeft}
          id="left"
          onClick={move}
          original={original}
        />
        <Posters className="posters" id={id}>
          {movies}
        </Posters>
      </RowContainer>
      {open && <Details detail={detail} handeShowDetails={handeShowDetails} />}
    </>
  );
}

const RowContainer = styled.div`
  margin-left: 20px;
  position: relative;

  > h3 {
    color: white;
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 2px;
    font-weight: lighter;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 1rem;
      margin-top: 20px;
    }
  }
`;

const ScrolLeft = styled(FontAwesomeIcon)`
  cursor: pointer;
  position: absolute;
  top: ${(props) => (props.original ? "53%" : "57%")};
  left: 0px;
  height: ${(props) => (props.original ? "230px" : "87px")};
  width: 15px;
  font-size: 13px;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  padding-inline: 10px;
  z-index: 10;
  @media (max-width: 768px) {
    display: none;
  }
`;
const ScrolRight = styled(FontAwesomeIcon)`
  cursor: pointer;
  position: absolute;
  top: ${(props) => (props.original ? "53%" : "57%")};
  right: 0px;
  height: 100%;
  height: ${(props) => (props.original ? "230px" : "87px")};
  width: 15px;
  font-size: 13px;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  padding-inline: 10px;
  z-index: 10;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Posters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: object-fit;
  overflow-y: hidden;
  overflow-x: scroll;
  scroll-behavior: smooth;
  position: relative;
  padding-block: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Poster = styled.div`
  cursor: pointer;
  > img {
    max-width: 150px;
    object-fit: cover;
  }
  transition: var(--mainTransition);
  &:hover {
    transform: scale(1.1);
  }
`;
