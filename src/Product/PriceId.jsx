import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";

const Content = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  @media screen and (min-width: 48rem) {
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 62rem) {
    margin-bottom: 3rem;
  }
`;

const Price = styled.h2`
  margin: 0;
  font-weight: 400;
  font-size: 1rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: 1.1875rem;
  color: #111;
  @media screen and (min-width: 62rem) {
    font-weight: 500;
  }
`;

const Id = styled.p`
  margin: 0;
  font-size: .75rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: 1rem;
  color: #171717;
  @media screen and (min-width: 62rem) {
    display: none;
  }
`;

export default props => {
  return (
    <Content>
      <Price>
        <NumberFormat
          value={110000}
          displayType="text"
          thousandSeparator=" "
          suffix=" руб."
        />
      </Price>
      <Id>Item 39428531</Id>
    </Content>
  );
};
