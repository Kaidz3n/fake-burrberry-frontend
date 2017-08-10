import React, { Component } from "react";
import triangleIcon from "../assets/triangle.svg";
import styled from "styled-components";

const Pane = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (min-width: 48rem) {
    display: none;
  }
`;

const Button = styled.button`
  padding: 0;
  margin-left: 1rem;

  background-color: transparent;
  border: none;
  @media only screen and (min-width: 48rem) {
    margin-left: .5rem;
  }
`;

const Title = styled.h2`
  margin: 0;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 500;
  text-align: left;
  color: #171717;
`;

const Icon = styled.img`margin-right: .5rem;`;

function ShippingDescription() {
  return (
    <Pane>
      <Button type="button">
        <Title>SHIPPING AND RETURNS</Title>
      </Button>
      <Icon src={triangleIcon} />
    </Pane>
  );
}

export default ShippingDescription;
