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


  ::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,.2);
    border-radius: 5px;

  }

  ::-webkit-scrollbar {
      width: 6px!important;
      height: 6px!important;
  }

  ::-webkit-scrollbar-track {
      background: hsla(0,0%,100%,.1);
  }

`;
