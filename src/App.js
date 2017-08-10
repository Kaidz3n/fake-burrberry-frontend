import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header/Header.jsx";
import Main from "./Product/Main.jsx";

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
