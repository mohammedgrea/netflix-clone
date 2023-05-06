import styled from "styled-components/macro";
import GetStarted from "./GetStarted";
import MainContainer from "./MainContainer";
import questions from "../data/question";
import Noname from "./Noname";
export default function FrequentlyAskedQuestions() {
  const Allquestions = questions.map((question) => (
    <Noname question={question} />
  ));

  return (
    <FrequentlyAskedQuestionsContainer>
      <h1>Frequently Asked Questions</h1>
      <MainContainer>
        {Allquestions}
        <GetStarted />
      </MainContainer>
    </FrequentlyAskedQuestionsContainer>
  );
}

const FrequentlyAskedQuestionsContainer = styled.div`
  border-top: 8px solid var(--secondaryColor);
  margin-bottom: 50px;
  > h1 {
    font-size: 3rem;
    text-align: center;
    margin: 60px 0 30px 0;
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
`;
