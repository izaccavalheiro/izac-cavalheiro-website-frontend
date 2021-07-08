import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  html {
    min-height: 100%;
    min-width: 100%;
    max-width: 100%;
  }
  
  body {
    background-color: #fff;
    min-height: 100%;
    max-height: 100%;
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
