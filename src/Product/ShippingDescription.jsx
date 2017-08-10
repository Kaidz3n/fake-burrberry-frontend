import React from "react";
import styled from "styled-components";
import triangleIcon from "../assets/triangle.svg";

const Button = styled.button`
  padding: 1rem;
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;

  align-items: baseline;
  border: none;
  background: transparent;

  border-bottom: solid 1px #c6c6c6;
  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const Title = styled.h2`
  margin: 2;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  line-height: 1.25rem;
  font-weight: 500;
  text-align: left;
  color: #171717;
  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const Icon = styled.img`
  margin: 0;
  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

export default function() {
  return (
    <Button type="button">
      <Title>Shipping & Returns</Title>
      <Icon alt="icon" src={triangleIcon} />
    </Button>
  );
}
