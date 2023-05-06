import React from "react";
import styled from "styled-components/macro";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
export default function GetStarted() {
  return (
    <GetStartedContainer>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <Container>
        <InputContainer>
          <Input type="email" />
          <Label>Email Address</Label>
        </InputContainer>
        <GetStartedButton>
          <Link to="/signup">
            Get Started
            <Icon icon={faGreaterThan} />
          </Link>
        </GetStartedButton>
      </Container>
    </GetStartedContainer>
  );
}

const GetStartedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* max-width: 750px; */
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
  > h3 {
    text-align: center;
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;
const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const GetStartedButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--mainColor);
  border: none;
  outline: none;
  width: 200px;
  height: 60px;
  font-size: 1.3rem;
  font-weight: 900;
  border-radius: 4px;
  &:hover {
    background-color: var(--mainDarkColor);
  }
  a {
    text-decoration: none;
    color: white;
  }
`;
const InputContainer = styled.div`
  position: relative;
  height: 60px;
  width: 400px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: var(--secondaryLightColor);
  font-weight: bold;
  pointer-events: none;
  transition: 0.07s cubic-bezier(0.17, 0.67, 0.83, 0.67);
`;
const Input = styled.input`
  background-color: var(--mainInputColor);
  height: 100%;
  width: 100%;
  border: 1px solid var(--secondaryColor);
  color: white;
  padding-left: 15px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;
  &:focus ~ label {
    outline: none;
    transform: translateY(-20px);
    font-size: 11px;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-weight: lighter;
  font-size: 1rem;
  margin-left: 10px;
`;
