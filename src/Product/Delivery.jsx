import React from "react";
import styled from "styled-components";

const Content = styled.section`
  margin-left: 0;
  margin-right: 0;
  @media only screen and (max-width: 47.99rem) {
    display: none;
  }
`;

const Image = styled.img`
  min-width: 432px;
  width: 100%;
  max-width: 100%;
  height: auto;

  vertical-align: middle;
  object-fit: contain;
`;

const Title = styled.h2`
  margin: 0;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.1875rem;
  font-weight: 500;
  text-align: left;
  text-transform: uppercase;
  color: #171717;
`;

const Subtitle = styled.h3`
  margin-top: 1rem;
  margin-bottom: 0.25rem;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: .875rem;
  font-weight: bold;
  text-align: left;
  color: #171717;
`;

const Text = styled.p`
  margin-bottom: 1.5rem !important;
  line-height: 1.35 !important;
  font-size: .75rem !important;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
`;

function Delivery() {
  return (
    <Content>
      <div className="row">
        <div className="col-md-7">
          <img
            src="img/bitmap5.jpg"
            srcset="img/bitmap5@2x.jpg 2x, img/bitmap5@3x.jpg 3x"
            alt="Product image"
          />
        </div>
        <div className="col-md-5">
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
}

export default Delivery;
