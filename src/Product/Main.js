import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const Title = styled.h1`
  margin-top: 0;
  padding: 1rem;

  font-family: Lora;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: #111;
  @media only screen and (min-width: 48rem) {
    padding: 1.5rem .5rem;
    font-size: 1.5rem;
    line-height: 1.75rem;
  }
`;

function Main() {
  return (
    <main className="container">
      <Helmet>
        <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
      </Helmet>
      <div className="row">
        <Title>Long Cotton Gabardine Car Coat</Title>
      </div>
    </main>
  );
}

export default Main;
