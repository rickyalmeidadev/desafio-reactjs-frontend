import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100vw;
    max-width: 100%;
    min-height: 100vh;

    background-color: ${props => props.theme.colors.light}
  }

  html {
    font-size: 10px;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 1.6rem Montserrat, sans-serif;
    color: ${props => props.theme.colors.dark};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
