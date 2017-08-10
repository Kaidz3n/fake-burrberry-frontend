import React from "react";
import Description from "./Description";
import { Container, Button, Title, Content } from "./Description";

const ShipContainer = Container.extend`
  border-top: none;
  margin-bottom: 1.9375rem;
  @media screen and (min-width: 48rem) {
    margin-bottom: .5rem;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const ShipTitle = Title.extend`
  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

class ShippingDescription extends Description {
  render() {
    return (
      <ShipContainer active={this.state.active}>
        <Button type="button" onClick={this.toggleActive}>
          <ShipTitle>
            {this.props.title}
          </ShipTitle>
        </Button>
        <Content active={this.state.active}>
          {this.props.children}
        </Content>
      </ShipContainer>
    );
  }
}

export default ShippingDescription;
