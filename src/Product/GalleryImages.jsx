import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  margin-left: -.5rem;
  margin-right: .5rem;
  display: flex;
  box-sizing: border-box;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  & > :nth-child(1) {
    margin-top: 6rem;
  }
  & > :nth-child(2) {
    margin-top: 10rem;
  }
  & > :nth-child(3) {
    margin-top: 4rem;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

export default () =>
  (<Content>
    <div className="col-lg-4">
      <Image src="img/bitmap3.jpg" alt="product-image" />
    </div>
    <div className="col-lg-4">
      <Image src="img/bitmap4.jpg" alt="product-image" />
    </div>
    <div className="col-lg-4">
      <Image src="img/desktop3.jpg" alt="product-image" />
    </div>
  </Content>);
