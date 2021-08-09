import * as React from "react"
import { Helmet } from "react-helmet"

import {ComponentProps} from "../../components"

import {GlobalStyle} from "./styles"

import {data} from "../../../data"

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

        <script async src={`https://www.googletagmanager.com/gtag/js?id=${data.vendor.google.gtmId}`}></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag() {
            window.dataLayer && window.dataLayer.push(arguments);
          }
          gtag('js', new Date());

          gtag('config', '{data.vendor.google.gtmId}');`}
        </script>
      </Helmet>
      
      {children}
    </>
  )
}
