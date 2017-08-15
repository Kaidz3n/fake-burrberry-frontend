import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import breakpoints from '../Common/breakpoints';
import Images from './Images';
import Information from './Information';
import Description from './Description';
import Delivery from './Delivery';
import ShippingDescription from './ShippingDescription';
import Recommendations from './Recommendations';
import GalleryImages from './GalleryImages';

const Background = styled.div`@media screen and (min-width: 62rem) {background-color: #d4bdad;}`;

const Title = styled.h1`
  margin: 0;
  margin-left: -1rem;
  padding: 1rem;
  font-family: Lora;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: #111;
  @media screen and (min-width: 48rem) {
    margin-left: -1.5rem;
    margin-top: .5rem;
    margin-bottom: .5rem;
    font-size: 1.5rem;
  }
  @media screen and (min-width: 62rem) {
    margin: 0;
    margin-bottom: .5rem;
    font-size: 1.5rem;
  }
`;

const Image = styled.img`
  margin-top: 4rem;
  margin-left: -.5rem;
  display: none;
  width: 100%;
  @media screen and (min-width: 62rem) {
    display: block;
  }
`;

export default () =>
  (<main className="container">
    <Helmet>
      <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
    </Helmet>

    <Background>
      <section className="container">
        <MediaQuery maxDeviceWidth={breakpoints.lg - 1}>
          <Title>Long Cotton Gabardine Car Coat</Title>
        </MediaQuery>
        <div className="row middle-lg">
          <div className="col-xs-12 col-md-7 col-lg-6">
            <Images />
          </div>
          <div className="col-xs-12 col-md-5 col-lg-6">
            <Information />
          </div>
        </div>
      </section>
    </Background>

    <section className="container">
      <div className="row">
        <div className="col-xs-12 col-lg-4">
          <Description>
            <p>A refined car coat crafted in protective cotton gabardine.</p>
            <p>
              Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and
              breathable fabric that protects against wind and rain.
            </p>
            <p>
              Raglan sleeves and a concealed button closure complement the clean tailored lines.
            </p>
            <p>The piece is finished with a distinctive check undercollar.</p>
            <br />
            <ul>
              <li>
                Coat length: 98cm/38.6in. This is based on a size UK 48 as proportions change
                slightly according to size.
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

        <div className="col-lg-8">
          <Image src="img/desktop2.jpg" alt="Long Cotton Gabardine Car Coat" />
        </div>
      </div>

      <MediaQuery minDeviceWidth={breakpoints.lg}>
        <div className="row">
          <GalleryImages />
        </div>
      </MediaQuery>

      <ShippingDescription>
        <Delivery />
      </ShippingDescription>
      <section className="row">
        <Recommendations />
      </section>
    </section>
  </main>);
