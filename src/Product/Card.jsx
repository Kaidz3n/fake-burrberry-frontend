import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";

const Card = styled.a`
  display: block;
  margin-bottom: 2rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 400;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const Name = styled.h3`
  margin-top: .5rem;
  margin-bottom: .5rem;
  margin-right: 1rem;
  font-family: Lora;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.19;
  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const FullName = styled.h3`
  margin-top: .5rem;
  margin-bottom: .5rem;
  font-family: Lora;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.19;
  @media screen and (max-width: 47.99rem) {
    display: none;
  }
`;

const Price = styled.h5`
  margin: 0;
  line-height: 1.17;
  font-size: .75rem;
  font-weight: 400;
  font-family: font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  text-align: left;
  color: #999999;
`;

export default function(props) {
  return (
    <Card>
      <Image alt="" src={props.image} />
      <Name>
        {props.name}
      </Name>
      <FullName>
        {props.fullname}
      </FullName>
      <Price>
        <NumberFormat
          value={props.price}
          displayType="text"
          thousandSeparator=" "
          suffix=" руб."
        />
      </Price>
    </Card>
  );
}
