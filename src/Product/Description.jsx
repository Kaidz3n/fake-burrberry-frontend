import React, { Component } from "react";
import triangleIcon from "../assets/triangle.svg";
import styled from "styled-components";

export const Container = styled.section`
  padding: 2rem 1rem;

  position: relative;
  display: flex;
  flex-basis: 100%;

  flex-wrap: wrap;
  border-top: 1px solid #c6c6c6;
  border-bottom: 1px solid #c6c6c6;
  @media screen and (min-width: 48rem) {
    border: none;
    border-top: 1px solid transparent;
    padding: 1.5rem .5rem;
  }
  ::after {
    position: absolute;
    content: url(${triangleIcon});
    right: 1rem;
    ${props => (props.active ? "transform: rotate(180deg);" : "")};
  }
  @media screen and (min-width: 48rem) {
    ::after {
      display: none;
    }
  }
`;

export const Button = styled.button`
  padding: 0;

  display: flex;
  flex-basis: 100%;
  justify-content: space-between;

  align-items: baseline;
  border: none;
  background: transparent;
`;

export const Title = styled.h2`
  margin: 0;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  line-height: 1.25rem;
  font-weight: 500;
  text-align: left;
  color: #171717;
`;

export const Content = styled.div`
  display: ${props => (props.active ? `block` : "none")};
  margin-top: 2rem;

  font-size: .875rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: 1.5rem;
  @media screen and (min-width: 48rem) {
    display: flex;
    flex-direction: column;
    margin-top: 0;
  }
  p,
  ul,
  li {
    margin: 0;
    padding: 0;

    font-family: Lora;
    font-size: .875rem;
    line-height: 1.5rem;
    list-style: none;
  }
`;

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((state, props) => ({
      active: !state.active
    }));
  }

  render() {
    return (
      <Container active={this.state.active}>
        <Button type="button" onClick={this.toggle}>
          <Title>Description</Title>
        </Button>
        <Content active={this.state.active}>
          {this.props.children}
        </Content>
      </Container>
    );
  }
}

export default Description;
