import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto Condensed', sans-serif;
    padding: 0 40px;

    @media screen and (max-width: 768px){
      padding: 0 10px;

    }
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
