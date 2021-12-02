import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;
  }

  body {

    @media screen and (max-width: 768px){
      padding: ;

    }
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
