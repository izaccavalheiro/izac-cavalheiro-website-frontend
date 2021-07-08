import * as React from "react"

import { ComponentProps } from "../"

import { GlobalStyle } from "./styles"

export const Layout = (props: ComponentProps): React.ReactElement => {
  const { children } = props

  return (
    <>
      <GlobalStyle />
      
      {children}
    </>
  )
}
