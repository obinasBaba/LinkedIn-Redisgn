import {createGlobalStyle} from "styled-components";
import commons from "./commons";

export const GlobalStyle = createGlobalStyle`

  ${commons};

  html {
    -webkit-font-smoothing: antialiased;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }


  * {
    scrollbar-width: thin;
    scrollbar-color: #3719ca #1e213d;
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 0px;
  }

  *::-webkit-scrollbar-track {
    //background: #072142;
    background-image: linear-gradient(to bottom, #072142, #061c37, #07182b, #061220, #020b16);
    transition: background-color 1s ease-in-out;

  }

  *::-webkit-scrollbar-thumb {
    background-color: #3719ca;
    border-radius: 100px;
    transition: background-color 1s ease-in-out;
  }

  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  body {

    //overflow-x: hidden;
    background-color: #f5f5f5;

    &.locked {
      overflow: hidden;
      height: 100vh;
    }

    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    margin: 0;
    position: relative;
    color: #fff;
    //background: var(--dark);

  }
  
`
