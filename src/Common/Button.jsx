import styled from "styled-components";

const Button = styled.button`
  margin-top: 1rem;
  padding: 1rem 0;
  flex-basis: 100%;
  line-height: .875rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: .75rem;
  letter-spacing: normal;
  text-transform: uppercase;
  border-radius: 2px;
  background: ${props => (props.primary ? "#171717" : "#fff")};
  border: solid 1px ${props => (props.primary ? "#171717" : "#999")};
  color: ${props => (props.primary ? "#fff" : "#171717")};
`;

export default Button;
