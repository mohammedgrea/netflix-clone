import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Row from "../components/Row";
import instance from "../lib/axios";
import { requests } from "../components/Requests";
import HeaderDashboard from "../components/HeaderDashboard";
export default function Dashboard() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function fetchData() {
      const res = await instance.get(requests.tranding);
      const random = Math.floor(Math.random() * res.data.results.length);
      setMovie(res.data.results[random]);
    }
    fetchData();
  }, []);

  return (
    <DashboardContainer>
      <HeaderDashboard />
      {movie && <Banner movie={movie} />}
      <Row
        request={requests.tranding}
        title="Original"
        original={true}
        id="1"
      />
      <Row request={requests.original} title="Original" id="2" />
      <Row request={requests.animationMovies} title="Animation Movies" id="3" />
      <Row request={requests.documentaries} title="documentaries" id="8" />
      <Row request={requests.actionMovies} title="action Movies" id="4" />
      <Row request={requests.documentaries} title="documentaries" id="6" />
      <Row request={requests.comedyMovies} title="Comedy Movies" id="5" />
      <Row request={requests.warMovies} title="war Movies" id="7" />
      <Footer />
    </DashboardContainer>
  );
}

const DashboardContainer = styled.div`
  overflow: hidden;
`;
