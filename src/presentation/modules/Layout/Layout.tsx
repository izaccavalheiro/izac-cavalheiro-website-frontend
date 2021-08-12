import * as React from "react"
import { Helmet } from "react-helmet"
import { connect } from "react-redux"

import {ComponentProps} from "../../components"

import {GlobalStyle} from "./styles"

import {data} from "../../../data"

interface LayoutProps extends ComponentProps {
  darkMode?: boolean
  darkModeToggle?: () => void
  pageTitle?: string
}

const LayoutComponent = (props: LayoutProps): React.ReactElement => {
  const {
    children,
    pageTitle
  } = props

  return (
    <>
      <GlobalStyle />

      <Helmet>
        <title>{pageTitle}</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />

        <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.4.3/webcomponents-loader.js"></script>
        <script type="module"
          async
          src="https://unpkg.com/ic-webcomponents@0.0.11/dist/ic-webcomponents/ic-webcomponents.esm.js"
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

const mapStateToProps = ({ darkMode }) => {
  return { darkMode }
}

export const Layout = connect(mapStateToProps, {})(LayoutComponent)
