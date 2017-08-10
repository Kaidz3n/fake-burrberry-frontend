import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Main from "./Product";

function App() {
  return (
    <div>
      <Helmet>
        <title>Burberry</title>
      </Helmet>
      <Header />
      <Main />
    </div>
  );
}

export default App;
