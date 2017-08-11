import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin-right: 1rem;

  width: 40px;
  height: 40px;

  border-radius: 50%;
  border: ${props => (props.active ? "solid 1px #232122" : "none")};
  background-color: ${props => props.color};
`;

export default function(props) {
  return <Button color={props.value} active={props.active} type="button" />;
}
