import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  margin-left: -1rem;
  margin-right: -1rem;
  display: flex;
  overflow-x: scroll;
  @media only screen and (min-width: 48rem) {
    margin-left: -.5rem;
    margin-right: .5rem;
  }
`;

const Image = styled.img`
  width: 300px;
  height: 400px;
  @media screen and (min-width: 48rem) {
    min-width: 432px;
    max-width: 100%;
    width: 100%;
    height: auto;
  }
  @media only screen and (min-width: 62rem) {
    display: none;
  }
`;

const DesktopImage = styled.img`
  display: none;
  @media only screen and (min-width: 62rem) {
    display: block;
    width: 100%;
  }
`;

export default () => (
  <Content>
    <Image
      src="img/bitmap.jpg"
      srcset="img/bitmap@2x.jpg 2x, img/bitmap@3x.jpg 3x"
      alt="product-image"
    />
    <Image
      src="img/bitmap2.jpg"
      srcset="img/bitmap2@2x.jpg 2x, img/bitmap2@3x.jpg 3x"
      alt="product-image"
    />
    <Image
      src="img/bitmap3.jpg"
      srcset="img/bitmap3@2x.jpg 2x, img/bitmap3@3x.jpg 3x"
      alt="product-image"
    />
    <Image
      src="img/bitmap4.jpg"
      srcset="img/bitmap4@2x.jpg 2x, img/bitmap4@3x.jpg 3x"
      alt="product-image"
    />
    <DesktopImage src="img/desktop1.jpg" alt="product-image" />
  </Content>
);
