import Button from "../Common/Button.jsx";
import styled from "styled-components";

const HelpButton = Button.extend`
  padding: 0;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  text-align: left;
  color: #171717;

  background-color: transparent;
  border: none;
`;

export default HelpButton;
