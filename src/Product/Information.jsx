import React from "react";
import styled from "styled-components";
import Button from "../Common/Button";
import ColorButton from "./ColorButton";
import HelpButton from "./HelpButton";
import NumberFormat from "react-number-format";
import { Medium, Large } from "../Common/responsive";
import SizeButton from "./SizeButton";

const Content = styled.section`
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  @media only screen and (min-width: 48rem) {
    margin-top: -1rem;
    margin-left: -.5rem;
    margin-right: .5rem;
  }
  @media only screen and (min-width: 62rem) {
    margin-right: 1rem;
  }
`;

const PriceId = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  }
  @media screen and (min-width: 62rem) {
    margin-bottom: 3rem;
  }
`;

const Price = styled.h2`
  margin: 0;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.1875rem;
  color: #111;
  @media screen and (min-width: 62rem) {
    margin-bottom: 2rem;
  }
`;

const Id = styled.p`
  margin: 0;
  font-size: .75rem;
  line-height: 1rem;
  color: #171717;
  @media screen and (min-width: 62rem) {
    margin-top: .5rem;
    margin-bottom: 1.5rem;
  }
`;

const Color = styled.p`
  margin: 0;
  font-size: .75rem;
  line-height: 1rem;
  @media screen and (min-width: 62rem) {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;

const ButtonColorContainer = styled.div`
  margin: 1rem 0 2rem 0;
  display: flex;
  flex-wrap: wrap;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
  @media screen and (min-width: 62rem) {
    margin: 0;
  }
`;

const Hr = styled.hr`
  margin: 0;
  border-top: none;
  border-bottom: solid 1px #c6c6c6;
`;

const Actions = ButtonContainer.extend`
  @media screen and (min-width: 62rem) {
    margin-top: .5rem;
    margin-bottom: 1.5rem;
  }
`;

const Wrapper = PriceId.extend`
  @media screen and (min-width: 62rem) {
    margin-bottom: 0;
  }
`;

const Size = styled.p`
  margin: 1rem 0;
  font-size: 0.75rem;
  line-height: 1rem;
`;

const Caption = styled.h3`
  margin: 0;
  margin-bottom: .25rem;
  line-height: .875rem;
  font-size: .75rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: bold;
`;

const Text = styled.p`
  margin: 0;
  line-height: 1.35;
  font-size: .75rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
`;

export default () => {
  return (
    <Content>
      <Medium>
        <PriceId>
          <Price>
            <NumberFormat
              value={110000}
              displayType="text"
              thousandSeparator=" "
              suffix=" руб."
            />
          </Price>
          <Id>Item 39428531</Id>
        </PriceId>
        <Color>Colour: Honey</Color>
        <ButtonColorContainer>
          <ColorButton name="black" value="#232122" type="button" />
          <ColorButton name="honey" value="#cfa880" type="button" active />
        </ButtonColorContainer>
        <Hr />
        <ButtonContainer>
          <Button primary type="button">
            Select a size
          </Button>
          <Button type="button">Find in store</Button>
          <HelpButton type="button">Need size help?</HelpButton>
        </ButtonContainer>
      </Medium>

      <Large>
        <div className="row">
          <div className="col-lg-12">
            <Price>
              <NumberFormat
                value={110000}
                displayType="text"
                thousandSeparator=" "
                suffix=" руб."
              />
            </Price>
          </div>
          <div className="col-lg-6">
            <Color>
              Colour: <b>Honey</b>
            </Color>
            <ButtonContainer>
              <ColorButton name="black" value="#232122" type="button" />
              <ColorButton name="honey" value="#cfa880" type="button" active />
            </ButtonContainer>
          </div>
          <div className="col-lg-6">
            <Wrapper>
              <Size>
                Size: <b>XL</b>
              </Size>
              <HelpButton type="button">Need size help?</HelpButton>
            </Wrapper>
            <ButtonContainer>
              <SizeButton>S</SizeButton>
              <SizeButton>M</SizeButton>
              <SizeButton>L</SizeButton>
              <SizeButton>XL</SizeButton>
            </ButtonContainer>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <Actions>
              <Button primary type="button">
                Add to bag
              </Button>
            </Actions>
          </div>
          <div className="col-lg-6">
            <Actions>
              <Button type="button">Find in store</Button>
            </Actions>
          </div>
          <div className="col-lg-12">
            <Caption>Free Next Day Delivery</Caption>
            <Text>
              Order before 7pm Monday to Thursday for delivery the next day
            </Text>
          </div>
        </div>
      </Large>
    </Content>
  );
};
