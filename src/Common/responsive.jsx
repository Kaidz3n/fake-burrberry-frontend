import React from "react";
import Responsive from "react-responsive";

const Desktop = ({ children }) =>
  <Responsive minWidth={992} children={children} />;
const MobileTablet = ({ children }) =>
  <Responsive maxWidth={991} children={children} />;
