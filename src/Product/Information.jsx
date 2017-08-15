import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import breakpoints from '../Common/breakpoints';
import ColorButton from './ColorButton';
import PriceId from './PriceId';
import Actions from './Actions';
import Size from './Size';
import TextButton from './TextButton';

const Content = styled.section`
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  @media only screen and (min-width: 48rem) {
    margin-top: -1rem;
    margin-left: -.5rem;
    margin-right: .5rem;
  }
  @media only screen and (min-width: 62rem) {
    margin-right: 1rem;
  }
`;
const Title = styled.h1`
  margin: 1rem .5rem;
  margin-left: .5rem;
  padding: 0;
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 400;
  @media screen and (min-width: 48rem) {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    margin-left: 0;
  }
  @media screen and (min-width: 62rem) {
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: .5rem;
  }
`;

const Color = styled.p`
  margin: 0;
  margin-top: 1rem;
  margin-left: .5rem;
  font-size: .75rem;
  line-height: 1rem;
  @media screen and (min-width: 48rem) {
    margin-top: 0;
  }
  @media screen and (min-width: 62rem) {
    margin: 0;
  }
`;

const ButtonColorContainer = styled.div`
  margin-top: 1rem;
  @media screen and (min-width: 62rem) {
    margin: 0;
    margin-bottom: .5rem;
  }
`;

const Hr = styled.hr`
  margin-top: 2rem;
  border: none;
  border-bottom: 1px solid #c6c6c6;
  @media screen and (min-width: 62rem) {
    display: none;
  }
`;

const Caption = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: .25rem;
  line-height: .875rem;
  font-size: .75rem;
  font-weight: bold;
`;

const Text = styled.p`
  margin: 0;
  line-height: 1.35;
  font-size: .75rem;
`;

export default () =>
  (<Content>
    <MediaQuery minDeviceWidth={breakpoints.lg - 1}>
      <Title>Long Cotton Gabardine Car Coat Coat Coat Coat Coat</Title>
    </MediaQuery>
    <PriceId />
    <div className="row">
      <div className="col-lg-6">
        <Color>
          Colour: <b>Honey</b>
        </Color>
      </div>
      <MediaQuery minDeviceWidth={breakpoints.lg - 1}>
        <div className="col-lg-6">
          <Size />
        </div>
      </MediaQuery>
    </div>
    <div className="row">
      <div className="col-xs-12 col-lg-6">
        <ButtonColorContainer>
          <ColorButton name="black" value="#232122" type="button" />
          <ColorButton name="honey" value="#cfa880" type="button" active />
        </ButtonColorContainer>
        <Hr />
      </div>
      <MediaQuery minDeviceWidth={breakpoints.lg - 1}>
        <div className="col-lg-6">
          <TextButton>S</TextButton>
          <TextButton>M</TextButton>
          <TextButton>L</TextButton>
          <TextButton>XL</TextButton>
        </div>
      </MediaQuery>
    </div>
    <Actions />
    <MediaQuery minDeviceWidth={breakpoints.lg - 1}>
      <Caption>Free Next Day Delivery</Caption>
      <Text>Order before 7pm Monday to Thursday for delivery the next Day</Text>
    </MediaQuery>
  </Content>);
