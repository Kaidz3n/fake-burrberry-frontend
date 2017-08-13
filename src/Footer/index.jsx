import React from "react";
import Navigation from "./Navigation";
import styled from "styled-components";

const Footer = styled.footer`
  padding: 1rem .5rem 2rem .5rem;
  background: #f3f3f3;
  @media screen and (min-width: 48rem) {
    padding: 2rem 0;
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 62rem) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0;
  display: block;
  line-height: 1rem;
  font-size: .75rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  background: transparent;
  border: none;
  color: #999;
  @media screen and (min-width: 48rem) {
    margin-top: 1.25rem;
    margin-right: 1.25rem;
    display: inline-block;
  }
  @media screen and (min-width: 62rem) {
    margin-top: 1.25rem;
    margin-right: 4.5rem;
    display: inline-block;
  }
`;

const Subtitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  line-height: 1.1875rem;
  font-size: 1rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: bold;
  text-align: center;
  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const Link = styled.a`
  display: block;
  font-size: .875rem;
  line-height: 1.0625rem;
  font-family: 'Lora', serif;
  font-style: italic;
  text-decoration: none;
  text-align: center;
  color: inherit;
  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

export default () => {
  return (
    <Footer>
      <div className="container">
        <Navigation />
        <Button>Shipping country: Russian Federation</Button>
        <Button>Language: English</Button>
        <Subtitle>Need help?</Subtitle>
        <Link href="#">Find out more and contact us</Link>
      </div>
    </Footer>
  );
};
