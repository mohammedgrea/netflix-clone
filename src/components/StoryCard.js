import React from "react";
import styled from "styled-components";
import MainContainer from "./MainContainer";
export default function StoryCard({ data }) {
  return (
    <StoryCardContainer>
      <MainContainer>
        <Container reverse={data.reverse}>
          <LeftCard>
            <Title>{data?.title}</Title>
            <Description>{data?.desc}</Description>
          </LeftCard>
          <RightCard>
            <MediaContainer>
              <ImageContainer>
                <Image src={data?.image} alt="TV Image" />
                {data?.video && <Video src={data?.video} autoPlay loop />}
              </ImageContainer>
            </MediaContainer>
          </RightCard>
        </Container>
      </MainContainer>
    </StoryCardContainer>
  );
}

const StoryCardContainer = styled.div`
  border-top: 8px solid var(--secondaryColor);
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.reverse ? " row-reverse" : "row")};
  justify-content: center;
  @media (max-width: 992px) {
    flex-direction: column;
  }
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
  line-height: 1.5;
  @media (max-width: 992px) {
    font-size: 2.4rem;
  }
`;
const Description = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 1.5;
  max-width: 600px;
  @media (max-width: 992px) {
    font-size: 1.2rem;
  }
`;
const MediaContainer = styled.div``;
const ImageContainer = styled.div`
  position: relative;
  height: 400px;
  width: 500px;
  @media (max-width: 992px) {
    flex-direction: column;
    height: 500px;
    width: 600px;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    height: 300px;
    width: 400px;
  }
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const Video = styled.video`
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 80%;
  z-index: 0;
`;
const RightCard = styled.div`
  margin-left: 30px;
`;
const LeftCard = styled.div`
  @media (max-width: 992px) {
    text-align: center;
  }
`;
