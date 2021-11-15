import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
  }

  #root {
      margin:0 auto;
      background-color: #ffffff;
      min-height: 100vh;
  }
  
  a {
    text-decoration: none;
  }

  a:visited {
    color: black;
  }
`;

export default GlobalStyle;
