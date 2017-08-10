import React, { Component } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Images from "./Images";
import Information from "./Information";
import Description from "./Description";
import Delivery from "./Delivery";
import ShippingDescription from "./ShippingDescription";

const Title = styled.h1`
  margin: 0;
  margin-left: 0;
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

      <section className="row">
        <div className="col-xs-12 col-md-7">
          <Images />
        </div>

        <div className="col-xs-12 col-md-5">
          <Information />
        </div>
      </section>

      <section className="row">
        <Description title="DESCRIPTION" />
      </section>

      <section className="row">
        <ShippingDescription />
        <Delivery />
      </section>
    </main>
  );
}

export default Main;
