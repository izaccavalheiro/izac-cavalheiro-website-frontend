import * as React from "react"
import { Helmet } from "react-helmet"

import {ComponentProps} from "../../components"

import {GlobalStyle} from "./styles"

export const Layout = (props: ComponentProps): React.ReactElement => {
  const { children } = props

  return (
    <>
      <GlobalStyle />

      <Helmet>
        <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.4.3/webcomponents-loader.js"></script>
        <script type="module"
          async
          src="https://unpkg.com/ic-webcomponents@0.0.2/dist/ic-webcomponents/ic-webcomponents.esm.js"
        ></script>
      </Helmet>
      
      {children}
    </>
  )
}
