import React from "react";
import Responsive from "react-responsive";

export const LG = ({ children }) =>
  <Responsive minWidth={992}>
    {children}
  </Responsive>;
export const XS_MD = ({ children }) =>
  <Responsive maxWidth={991}>
    {children}
  </Responsive>;
