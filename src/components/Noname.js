import React, { useState } from "react";
import styled from "styled-components/macro";
import { faClose, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Noname({ question }) {
  const [showBody, setShowBody] = useState(false);
  return (
    <Container key={question.id}>
      <Head onClick={() => setShowBody(!showBody)}>
        <Question>{question.title}</Question>
        <Icon icon={showBody ? faClose : faPlus} />
      </Head>
      <Body showBody={showBody}>
        <p>{question.answer}</p>
      </Body>
    </Container>
  );
}
const Container = styled.div`
  margin: 10px 0;
`;
const Question = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
`;
const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
`;
const Head = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background-color: var(--secondaryColor);
  padding-inline: 20px;
  transition: var(--mainTransition);
  &:hover {
    background-color: var(--secondaryLightColor);
  }
`;
const Body = styled.div`
  border-top: 1px solid var(--mainBgColor);
  background-color: var(--secondaryColor);
  padding-inline: 20px;
  height: ${(props) => (props.showBody ? "auto" : "0")};
  padding-block: ${(props) => (props.showBody ? " 20px" : "0px")};
  overflow: hidden;
  font-weight: bold;
  transition: all 0.25s cubic-bezier(0.5, 0, 0.1, 1) 0s;
  > p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;
