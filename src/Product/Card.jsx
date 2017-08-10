import React from "react";
import styled from "styled-components";

let NumberFormat = require("react-number-format");

const Card = styled.a`
  display: block;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const Name = styled.h3`
  margin-top: .5rem;
  margin-bottom: .5rem;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.19;
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
      <Price>
        <NumberFormat
          value={props.price}
          displayType={"text"}
          thousandSeparator={" "}
          suffix={" руб."}
        />
      </Price>
    </Card>
  );
}
