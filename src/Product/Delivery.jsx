import React from "react";
import styled from "styled-components";

const Content = styled.section`
  margin-left: -1rem;
  margin-right: .5rem;
  display: none;
  @media only screen and (min-width: 48rem) {
    display: block;
  }
  @media screen and (min-width: 62rem) {
    align-items: center;
    margin-top: 2.5rem;
  }
`;

const Image = styled.img`
  margin-left: .5rem;
  min-width: 432px;
  width: 100%;
  max-width: 100%;
  height: auto;

  vertical-align: middle;
  object-fit: contain;
`;

const Title = styled.h2`
  margin: 0;
  margin-left: .5rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.1875rem;
  font-weight: 500;
  text-align: left;
  text-transform: uppercase;
  color: #171717;
  @media screen and (min-width: 62rem) {
    margin-top: 5rem;
  }
`;

const Subtitle = styled.h3`
  margin-top: 1rem;
  margin-bottom: -.5rem;
  margin-left: .5rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: .875rem;
  font-weight: bold;
  text-align: left;
  color: #171717;
`;

const Text = styled.p`
  margin-bottom: 1.5rem;
  margin-left: .5rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1.33;
  text-align: left;
  color: #171717;
`;

export default () => {
  return (
    <Content>
      <div className="row">
        <div className="col-md-7">
          <Image
            src="img/bitmap5.jpg"
            srcset="img/bitmap5@2x.jpg 2x, img/bitmap5@3x.jpg 3x"
            alt="Product image"
          />
        </div>
        <div className="col-md-5 col-lg-4 col-lg-offset-1">
          <Title>Delivery</Title>
          <Subtitle>Free Next Day Delivery</Subtitle>
          <Text>
            Order before 7pm Monday to Thursday for delivery the next day
          </Text>

          <Subtitle>Collect-in-Store</Subtitle>
          <Text>
            Order online today and pick up your items in store as early as
            tomorrow
          </Text>

          <Subtitle>Free Returns</Subtitle>
          <Text>Enjoy free returns on your order</Text>

          <Subtitle>Free Gift Packaging</Subtitle>
          <Text>
            Discover our gift packaging, a gold lined box tied with a coloured
            ribbon
          </Text>
        </div>
      </div>
    </Content>
  );
};
