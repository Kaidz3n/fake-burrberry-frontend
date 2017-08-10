import React from "react";
import Card from "./Card";
import styled from "styled-components";

const Title = styled.h2`
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: .5rem;

  display: inline-block;

  line-height: 1.1875rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 1rem;
  border-bottom: 1px solid #171717;
  @media screen and (min-width: 48rem) {
    margin-bottom: 1rem;
  }
`;

const Recommendations = styled.section`
  padding: 2rem 1rem 3rem 1rem;
  @media screen and (min-width: 48rem) {
    padding-right: .5rem;
    padding-bottom: 2rem;
    padding-left: .5rem;
  }
`;

const More = styled.div`@media screen and (min-width: 48rem) {display: none;}`;

const Link = styled.a`
  margin-bottom: 1rem;

  display: block;

  font-family: Lora;
  font-size: .875rem;
  font-style: italic;
  line-height: 1.0625rem;
  color: #171717;
  text-decoration: none;
`;

export default function() {
  return (
    <Recommendations>
      <Title>WE RECOMMEND</Title>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <Card
            image="img/card1.jpg"
            name="Emroided Hooded"
            fullname="Emroided Hooded Content For Three Lines"
            price={27000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            image="img/card2.jpg"
            name="Relaxed Fit Stretch Jeans"
            fullname="Relaxed Fit Stretch Jeans Content For Three Lines"
            price={22500}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            image="img/card3.jpg"
            name="Leather and House Check"
            fullname="Leather and House Check Content For Three Lines"
            price={120000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            image="img/card4.jpg"
            name="Leather Wingtip Check"
            fullname="Leather Wingtip Check Content For Three Lines"
            price={46000}
          />
        </div>
      </div>
      <More>
        <div className="row">
          <div className="col-xs-12">
            <Title>MORE FOR YOU</Title>
          </div>
          <div className="col-xs-12">
            <Link href="#">Men's Black Trench Coats</Link>
          </div>
          <div className="col-xs-12">
            <Link href="#">Men's Short Trench Coats</Link>
          </div>
          <div className="col-xs-12">
            <Link href="#">Men's Long Trench Coats</Link>
          </div>
        </div>
      </More>
    </Recommendations>
  );
}
