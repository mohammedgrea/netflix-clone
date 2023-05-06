import React, { useState } from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { UserAuth } from "../context/AuthenticationContext";
export default function HeaderDashboard() {
  const { currentUser, logout } = UserAuth();
  const [toggelSearch, setToggelSearch] = useState(false);
  const [changeHeaderBg, setChangeHeaderBg] = useState(false);

  window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY >= 100) {
      setChangeHeaderBg(true);
    } else {
      setChangeHeaderBg(false);
    }
  });
  return (
    <HeaderDashboardcontainer changeHeaderBg={changeHeaderBg}>
      <LeftHeader>
        <LogoContainer>
          <Logo src="images/Netflix-logo.png" alt="Netflix Logo"></Logo>
        </LogoContainer>
      </LeftHeader>
      <MiddleHeader>
        <SearchContainer toggelSearch={toggelSearch}>
          <SearchInput type="txt" placeholder="Search in Netflix" />
          <SearchIcon
            icon={faSearch}
            onClick={() => setToggelSearch(true)}
            toggelSearch={toggelSearch}
          />
        </SearchContainer>
      </MiddleHeader>
      <RightHeader>
        {currentUser?.email === process.env.REACT_APP_DEMO_EMAIL && (
          <DemoButton>Demo Mode</DemoButton>
        )}
        <SingInButton onClick={logout}>log out</SingInButton>
      </RightHeader>
    </HeaderDashboardcontainer>
  );
}

const HeaderDashboardcontainer = styled.div`
  position: fixed;
  height: 70px;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${(props) =>
    props.changeHeaderBg ? "black" : "transparent"};
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 20px;
  z-index: 100;
  @media (max-width: 768px) {
    height: 60px;
    padding-inline: 5px;
  }
`;

const LeftHeader = styled.div``;

const LogoContainer = styled.div`
  cursor: pointer;
  width: 100px;
  @media (max-width: 768px) {
    width: 80px;
  }
`;
const Logo = styled.img`
  width: 100%;
`;
const MiddleHeader = styled.div`
  flex: 0.7;
  display: none;
  @media (max-width: 992px) {
    flex: 0.8;
  }
`;

const SearchIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  padding: 10px;
  color: white;
  font-size: 18px;
  margin-right: 5px;
  border-radius: 50%;
  @media (max-width: 992px) {
    font-size: 12px;
  }
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.toggelSearch ? "var(--mainInputColor)" : "transparent"};
  border: 1px solid
    ${(props) => (props.toggelSearch ? "var(--secondaryColor)" : "transparent")};
  border-radius: 8px;
  height: 45px;
  width: 70%;
  width: ${(props) => (props.toggelSearch ? "70%" : "fit-content")};
  padding: 5px;
  transition: var(--mainTransition);
  > div {
    display: flex;
    justify-content: flex-end;
  }
  @media (max-width: 992px) {
    width: 100%;
    height: 40px;
    font-size: 12px;
  }
`;
const SearchInput = styled.input`
  width: 80%;
  font-size: 18px;
  background-color: transparent;
  color: white;
  height: 100%;
  border: none;
  outline: none;
  display: none;
  @media (max-width: 768px) {
    width: 90%;
    font-size: 12px;
  }
`;
const RightHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  > p {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
const SingInButton = styled.button`
  cursor: pointer;
  background-color: red;
  border: none;
  outline: none;
  padding: 8px 15px;
  font-size: 15px;
  font-weight: 900;
  border-radius: 4px;
  color: white;

  &:hover {
    background-color: var(--mainDarkColor);
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
const DemoButton = styled.div`
  background-color: green;
  padding: 8px 15px;
  font-size: 15px;
  font-weight: 900;
  border-radius: 4px;
  color: white;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
