import React, { Component } from "react";
import triangleIcon from "../assets/triangle.svg";
import styled from "styled-components";

const Content = styled.section`
  padding-top: 2rem;
  margin-left: 0;
  margin-right: 0;

  border-top: solid 1px #c6c6c6;
  @media only screen and (min-width: 48rem) {
    margin-top: 1.5rem;

    border: none;
  }
`;

const Pane = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

const Icon = styled.img`
  margin-right: .5rem;

  transform: rotate(180deg);
`;

const Text = styled.div`
  margin: 1rem 1rem 2rem 1rem;

  font-family: Lora;
  font-size: .875rem;
  line-height: 1.5rem;
  color: #171717;
  @media only screen and (min-width: 48rem) {
    margin-left: .5rem;
    margin-bottom: 1.5rem;
  }

  p,
  ul,
  li {
    margin: 0;
    padding: 0;

    list-style: none;
  }
`;

function Description() {
  return (
    <Content>
      <Pane>
        <Button type="button">
          <Title>DESCRIPTION</Title>
        </Button>
        <Icon src={triangleIcon} />
      </Pane>

      <Text>
        <p>A refined car coat crafted in protective cotton gabardine.</p>
        <p>
          Invented by Thomas Burberry in 1879, cotton gabardine is a tightly
          woven and breathable fabric that protects against wind and rain.
        </p>
        <p>
          Raglan sleeves and a concealed button closure complement the clean
          tailored lines.
        </p>
        <p>The piece is finished with a distinctive check undercollar.</p>
        <br />
        <ul>
          <li>
            Coat length: 98cm/38.6in. This is based on a size UK 48 as
            proportions change slightly according to size.
          </li>
          <li>Outer: 100% cotton</li>
          <li>Check lining: 100% cotton</li>
          <li>Sleeve lining: 100% viscose</li>
          <li>Buttons: buffalo horn</li>
          <li>Specialist dry clean</li>
          <li>Made in Europe</li>
          <li>Item 39428531</li>
        </ul>
      </Text>
    </Content>
  );
}

export default Description;
