import React from "react";
import logo from "./logo1.svg";
import "./Header.css";

export default () => {
  return (
    <header className="logo-container">
      <a href="https://ru.burberry.com/">
        <img src={logo} className="logo" alt="logo" />
      </a>
    </header>
  );
};
