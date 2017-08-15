import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const Header = styled.header`
  padding: 1rem;
  border-bottom: 1px solid #c6c6c6;
  @media screen and (min-width: 48rem) {
    padding: 1.5rem;
  }
  @media screen and (min-width: 62rem) {
    padding: 2rem;
    border-bottom: none;
  }
`;

const Logo = styled.img`
  margin: auto;
  display: block;
  height: .625rem;
  @media screen and (min-width: 62rem) {
    height: 1rem;
  }
`;

export default () =>
  (<Header>
    <a href="https://ru.burberry.com/">
      <Logo alt="Logo" src={logo} />
    </a>
  </Header>);
