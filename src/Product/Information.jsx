import React from "react";
import styled from "styled-components";
import Button from "../Common/Button.jsx";
import ColorButton from "./ColorButton.jsx";
import HelpButton from "./HelpButton.jsx";

const Content = styled.section`
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
`;

const PriceId = styled.div`
  margin-top: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: baseline;
  }

  @media only screen and (min-width: 48rem) {
    margin: 0 -.5rem;
  }
`;

const Price = styled.h2`
  margin: 0;
  margin-left: .5rem;

  font-weight: 400;
  font-size: 1rem;
  line-height: 1.1875rem;
  color: #111;
`;

const Id = styled.p`
  margin: 0;
  margin-right: .5rem;

  font-size: .75rem;
  line-height: 1rem;
  color: #171717;
`;

const Color = styled.p`
  margin: 0;

  font-size: .75rem;
  line-height: 1rem;
`;

const ButtonColorContainer = styled.div`
  margin: 1rem 0;

  display: flex;
  flex-wrap: wrap;
`;

const ButtonContainer = styled.div`
  margin: 2rem 0 3rem 0;

  display: flex;
  flex-direction: column;
`;

const Hr = styled.hr`
  margin: 0;

  border-top: none;
  border-bottom: solid 1px #c6c6c6;
`;

function Information() {
  return (
    <Content>
      <PriceId>
        <Price>110 000 руб.</Price>
        <Id>Item 39428531</Id>
      </PriceId>

      <Color>Colour: Honey</Color>

      <ButtonColorContainer>
        <ColorButton Name="black" Value="#232122" type="button" />
        <ColorButton Name="honey" Value="#cfa880" type="button" active />
      </ButtonColorContainer>

      <Hr />

      <ButtonContainer>
        <Button primary type="button">
          SELECT A SIZE
        </Button>
        <Button type="button">FIND IN STORE</Button>
        <HelpButton type="button">NEED SIZE HELP?</HelpButton>
      </ButtonContainer>
    </Content>
  );
}

export default Information;
