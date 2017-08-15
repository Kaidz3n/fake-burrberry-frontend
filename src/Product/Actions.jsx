import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import Button from '../Common/Button';
import breakpoints from '../Common/breakpoints';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: .5rem;
  @media screen and (min-width: 48rem) {
    margin-left: 0rem;
    margin-right: 0rem;
  }
  @media screen and (min-width: 62rem) {
    margin-top: 0;
  }
`;

const TextButton = Button.extend`
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  padding: 0;
  text-align: left;
  border: none;
  background: transparent;
  color: #171717;
  @media screen and (min-width: 62rem) {
    flex-basis: 70%;
    margin-top: 0;
    text-align: right;
  }
`;

export default () =>
  (<div>
    <MediaQuery maxDeviceWidth={breakpoints.lg - 1}>
      <Content>
        <Button primary type="button">
          Select a size
        </Button>
        <Button type="button">Find in store</Button>
      </Content>
    </MediaQuery>
    <MediaQuery minDeviceWidth={breakpoints.lg}>
      <div className="row">
        <div className="col-lg-6">
          <Content>
            <Button primary type="button">
              Add to bag
            </Button>
          </Content>
        </div>
        <div className="col-lg-6">
          <Content>
            <Button type="button">Find in store</Button>
          </Content>
        </div>
      </div>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={breakpoints.lg - 1}>
      <TextButton type="button">Need size help?</TextButton>
    </MediaQuery>
  </div>);
