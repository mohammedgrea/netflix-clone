import React from "react";
import Landieng from "../components/Landieng";
import MainContainer from "../components/MainContainer";
import StoryCard from "../components/StoryCard";
import Header from "../components/Header";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import Footer from "../components/Footer";
import data from "../data/data";
export default function Home() {
  const carts = data?.map((data) => <StoryCard data={data} />);
  return (
    <>
      <MainContainer>
        <Header signinStats={true} />
      </MainContainer>
      <Landieng />
      {carts}
      <FrequentlyAskedQuestions />
      <Footer />
    </>
  );
}
