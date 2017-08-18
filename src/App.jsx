import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Product from './Product';
import Footer from './Footer';

export default () =>
  (<div>
    <Helmet>
      <title>Burberry</title>
    </Helmet>
    <Header />
    <BrowserRouter>
      <div>
        <Route exath path="/product" component={Product} />
      </div>
    </BrowserRouter>
    <Footer />
  </div>);
