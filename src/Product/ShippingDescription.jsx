import React from "react";
import styled from "styled-components";
import triangleIcon from "../assets/triangle.svg";

const Button = styled.button`
  display: flex;
  flex-basis: 100%;
  padding: 1rem 1rem;
  margin-left: -1rem;
  border: none;
  background: transparent;
  border-bottom: solid 1px #c6c6c6;
  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  line-height: 1.25rem;
  font-weight: 500;
  color: #171717;
  background-image: url(${triangleIcon});
  background-repeat: no-repeat;
  background-position: right;
  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

export default function() {
  return (
    <Button type="button">
      <Title>Shipping & Returns</Title>
    </Button>
  );
}
