import React from "react";
import logo from "../assets/logo.svg";
import styled from "styled-components";

const Header = styled.header`
  padding: 1rem;

  border-bottom: 1px solid #c6c6c6;
  @media screen and (min-width: 48rem) {
    padding: 1.5rem;
  }
`;

const Logo = styled.img`
  margin: auto;
  display: block;

  width: 138px;
  height: 10px;
`;

export default function() {
  return (
    <Header>
      <a href="https://ru.burberry.com/">
        <Logo alt="Logo" src={logo} />
      </a>
    </Header>
  );
}
