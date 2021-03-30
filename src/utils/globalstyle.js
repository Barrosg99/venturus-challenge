import { createGlobalStyle } from 'styled-components';

import mediaQuery from './mediaQuery';

const GlobalStyle = createGlobalStyle`

  body {
    background-color: #f7f3f6;
    height: 100%;
    min-height: 100vh;
    max-width: 100%;
    font-family: 'Roboto';
  }

  button {
    cursor: pointer;
  }
  
  button:active {
    outline: none;
    border: none;
  }
  button:focus {
    outline: 0;
  }
  svg {
    cursor: pointer;
    color: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  html{
    font-size: 18px;
    ${mediaQuery}{
      font-size: 14px;
    }
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    -webkit-border-radius: 10px;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #5B5B5B; 
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb:window-inactive {
    background: #5B5B5B; 
  }
  `;

export default GlobalStyle;
