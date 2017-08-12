import React, { Component } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Images from "./Images";
import Information from "./Information";
import Description from "./Description";
import Delivery from "./Delivery";
import ShippingDescription from "./ShippingDescription";
import Recommendations from "./Recommendations";
import { Medium, Large } from "../Common/responsive";
import GalleryImages from "./GalleryImages";

const Content = styled.section`
  width: 100%;
  background: #d4bdad;
`;

const Wrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  margin-left: -1rem;
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

const Image = styled.img`
  width: 100%;
  display: block;
  margin-top: 4rem;
  margin-left: -.5rem;
`;

export default function() {
  return (
    <main className="container">
      <Helmet>
        <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
      </Helmet>

      <Medium>
        <section className="container">
          <div className="row">
            <div className="col-xs-12">
              <Title>Long Cotton Gabardine Car Coat</Title>
            </div>
          </div>
        </section>
      </Medium>
      <Medium>
        <section className="container">
          <div className="row">
            <div className="col-xs-12 col-md-7">
              <Images />
            </div>
            <div className="col-xs-12 col-md-5">
              <Information />
            </div>
          </div>
        </section>
      </Medium>

      <Large>
        <Content>
          <div className="container">
            <div className="row">
              <Wrapper>
                <div className="col-lg-6">
                  <Images />
                </div>
                <div className="col-xs-12 col-md-5 col-lg-6">
                  <Title>
                    Long Cotton Gabardine Car Coat Coat Coat Coat Coat
                  </Title>
                  <Information />
                </div>
              </Wrapper>
            </div>
          </div>
        </Content>
      </Large>

      <section className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-4">
            <Description>
              <p>A refined car coat crafted in protective cotton gabardine.</p>
              <p>
                Invented by Thomas Burberry in 1879, cotton gabardine is a
                tightly woven and breathable fabric that protects against wind
                and rain.
              </p>
              <p>
                Raglan sleeves and a concealed button closure complement the
                clean tailored lines.
              </p>
              <p>The piece is finished with a distinctive check undercollar.</p>
              <br />
              <ul>
                <li>
                  Coat length: 98cm/38.6in. This is based on a size UK 48 as
                  proportions change slightly according to size.
                </li>
                <li>Outer: 100% cotton</li>
                <li>Check lining: 100% cotton</li>
                <li>Sleeve lining: 100% viscose</li>
                <li>Buttons: buffalo horn</li>
                <li>Specialist dry clean</li>
                <li>Made in Europe</li>
                <li>Item 39428531</li>
              </ul>
            </Description>
          </div>
          <Large>
            <div className="col-lg-8">
              <Image src="img/desktop2.jpg" alt="product-image" />
            </div>
          </Large>
        </div>
        <Large>
          <div className="row">
            <GalleryImages />
          </div>
        </Large>

        <ShippingDescription />
        <Delivery />

        <section className="row">
          <Recommendations />
        </section>
      </section>
    </main>
  );
}
