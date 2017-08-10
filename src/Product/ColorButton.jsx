import React, { Component } from "react";
import styled from "styled-components";

const Content = styled.button`
  margin-right: 1rem;

  width: 40px;
  height: 40px;

  border-radius: 50%;
  border: ${props => (props.active ? "solid 1px #232122" : "none")};
  background-color: ${props => props.color};
`;

function ColorButton(props) {
  return <Content color={props.Value} active={props.active} type="button" />;
}

export default ColorButton;
