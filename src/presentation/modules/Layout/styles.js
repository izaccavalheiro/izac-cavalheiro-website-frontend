import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', Arial, Helvetica, sans-serif;
  }

  html {
    height: 100%;
    min-width: 100%;
    max-width: 100%;
    font-size: 100%;
  }
  
  body {
    background-color: #fff;
    height: 100%;
    min-width: 100%;
    max-width: 100%;
  }

  #___gatsby,
  #___gatsby > div {
    min-height: 100%;
    max-height: 100%;
    min-width: 100%;
    max-width: 100%;
    display: flex; 
  }
`
