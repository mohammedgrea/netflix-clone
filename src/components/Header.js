import React from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components/macro";
import { UserAuth } from "../context/AuthenticationContext";
export default function Header({ signinStats }) {
  const { currentUser, login } = UserAuth();
  function handelSubmie(e) {
    e.preventDefault();
    login(
      process.env.REACT_APP_DEMO_EMAIL,
      process.env.REACT_APP_DEMO_PASSWORD
    );
  }
  return (
    <HeaderContainer>
      <LeftHeader>
        <LogoContainer>
          <Link to="/">
            <Logo src="images/Netflix-logo.png" alt="Netflix Logo"></Logo>
          </Link>
        </LogoContainer>
      </LeftHeader>
      <RightHeader>
        <form onSubmit={handelSubmie}>
          <WithOUtEmail signinStats={signinStats}>
            use without sign in
          </WithOUtEmail>
        </form>
        <SingInButton signinStats={signinStats}>
          <Link to="/signin">Sign in</Link>
        </SingInButton>
      </RightHeader>
      {currentUser && <Navigate to="/Dashboard" />}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  width: 80%;
  z-index: 10;

  @media (max-width: 992px) {
    width: 100%;
    padding-inline: 10px;
  }
`;
const LeftHeader = styled.div``;
const RightHeader = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    gap: 5px;
  }
`;
const LogoContainer = styled.div`
  cursor: pointer;
  width: 100px;
`;
const Logo = styled.img`
  width: 100%;
`;

const SingInButton = styled.button`
  cursor: pointer;
  background-color: var(--mainColor);
  border: none;
  outline: none;
  padding: 8px 15px;
  font-size: 0.9rem;
  font-weight: 900;
  border-radius: 4px;
  display: ${(props) => (props.signinStats ? "block" : "none")};
  &:hover {
    background-color: var(--mainDarkColor);
  }
  a {
    text-decoration: none;
    color: white;
  }
  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 8px 12px;
  }
`;
const WithOUtEmail = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 1px solid red;
  outline: none;
  padding: 8px 15px;
  font-size: 0.9rem;
  font-weight: 900;
  border-radius: 4px;
  color: white;
  display: ${(props) => (props.signinStats ? "block" : "none")};
  &:hover {
    background-color: var(--mainDarkColor);
  }
  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 8px 12px;
  }
`;
