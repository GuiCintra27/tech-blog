"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`  
  * {
    text-decoration: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html,
  body {
    font-family: "Work Sans";
    max-width: 100vw;
    overflow-x: hidden;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  a {
    color: inherit;
  }
`;

export default GlobalStyle;
