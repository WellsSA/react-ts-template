import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  html, body, #root {
    height: 100%;
  }

  html {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #FFF;
    -webkit-font-smoothing: antialiased
  }

  body, input, button {
    font: 1.6rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  .ReactCollapse--collapse {
    width: 100%;
  }

  .ReactCollapse--content {
    width: 100%;
  }


`;
