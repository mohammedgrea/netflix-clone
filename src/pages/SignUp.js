import React, { useState } from "react";
import styled from "styled-components/macro";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link, Navigate } from "react-router-dom";
import LandingContainer from "../components/LandiengContainer";
import { UserAuth } from "../context/AuthenticationContext";
import validation from "../helpers/validation";
export default function SignUp() {
  const { currentUser, logup, errorFirebase, loading } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErros] = useState({});
  const [confirmPasswrd, setConfirmPassword] = useState("");
  function hundelSubmit(e) {
    e.preventDefault();
    setErros(validation(email, password, errorFirebase, confirmPasswrd));
    if (password === confirmPasswrd) {
      logup(email, password);
    }
  }

  return (
    <>
      <LandingContainer>
        <Header signinStats={false} />
        <SignContainer onSubmit={hundelSubmit}>
          <h2>Sign Up</h2>
          <InputContainer error={errors.hasOwnProperty("email")}>
            <Input
              type="email"
              required
              error={errors.hasOwnProperty("email")}
              onChange={({ target }) => setEmail(target.value)}
            />
            {errors.email && <p> {errors.email}</p>}
            <Label len={email.length}>Email or phone number</Label>
          </InputContainer>
          <InputContainer error={errors.hasOwnProperty("password")}>
            <Input
              type="password"
              required
              error={errors.hasOwnProperty("password")}
              onChange={({ target }) => setPassword(target.value)}
            />
            {errors.password && <p> {errors.password}</p>}

            <Label len={password.length}>Password</Label>
          </InputContainer>
          <InputContainer error={errors.hasOwnProperty("confiPassword")}>
            <Input
              type="password"
              required
              error={errors.hasOwnProperty("confiPassword")}
              onChange={({ target }) => setConfirmPassword(target.value)}
            />
            {errors.confiPassword && <p> {errors.confiPassword}</p>}
            <Label len={confirmPasswrd.length}>Confirm Password</Label>
          </InputContainer>
          <SignInButton>Sign Up</SignInButton>
          <RememberMe>
            <CheckBox type="checkbox" />
            <label>Remember me</label>
            <a>Need help?</a>
          </RememberMe>
          <NewToNetflix>
            Have an Account? <Link to="/signin">Sign in.</Link>
          </NewToNetflix>
          <Disc>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <a>Learn more.</a>
          </Disc>
        </SignContainer>
        {currentUser && <Navigate to="/Dashboard" />}
      </LandingContainer>
      <Footer />
    </>
  );
}

const SignContainer = styled.form`
  background-color: var(--mainInputColor);
  padding: 20px 70px 50px 70px;
  @media (max-width: 768px) {
    position: absolute;
    width: 90%;
    top: 70px;
    padding: 20px 20px 50px 20px;
  }
  z-index: 1;
  color: var(--secondaryLightColor);
  > h2 {
    color: white;
    font-size: 2rem;
    margin-block: 30px;
  }
`;
const InputContainer = styled.div`
  position: relative;
  height: 50px;
  width: 300px;
  background-color: var(--secondaryColor);
  margin: ${(props) => (props.error ? "35px" : "20px")} 0;
  border-radius: 4px;
  > p {
    color: var(--validationColor);
    font-size: 12px;
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    margin: 20px 0;
    width: 100%;
    margin: 10px 0;
  }
`;
const Label = styled.label`
  top: 50%;
  transform: ${(props) =>
    props.len > 0 ? "translateY(-20px);" : "translateY(-50%);"};
  left: 15px;
  font-size: ${(props) => (props.len > 0 ? "11px" : "16px")};
  position: absolute;
  pointer-events: none;
  transition: 0.07s cubic-bezier(0.17, 0.67, 0.83, 0.67);
`;
const Input = styled.input`
  height: 100%;
  width: 100%;
  background-color: var(--secondaryColor);
  border: none;
  color: white;
  font-size: 18px;
  padding-top: 10px;
  padding-left: 15px;
  font-weight: bold;
  border-radius: 4px;
  border-bottom: ${(props) =>
    props.error ? "2px solid var(--validationColor)" : "none"};
  outline: none;
  &:focus ~ label {
    outline: none;
    transform: translateY(-20px);
    font-size: 11px;
  }
`;

const SignInButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--mainColor);
  border: none;
  outline: none;
  color: white;
  width: 300px;
  height: 50px;
  font-size: 1.3rem;
  font-weight: 900;
  border-radius: 4px;
  margin: 30px 0 10px 0;
  @media (max-width: 768px) {
    margin: 20px 0 10px 0;
    width: 100%;
  }
  &:hover {
    background-color: var(--mainDarkColor);
  }
`;

const RememberMe = styled.div`
  display: flex;

  > a {
    margin-left: auto;
  }
`;

const CheckBox = styled.input`
  margin-right: 5px;
`;

const NewToNetflix = styled.div`
  margin: 20px 0;
  > a {
    cursor: pointer;
    color: white;
  }
`;

const Disc = styled.div`
  width: 300px;
  font-size: 0.8rem;
  > a {
    color: #045aef;
  }
`;
