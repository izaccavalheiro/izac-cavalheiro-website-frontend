import * as React from "react"

import { ComponentProps } from ".."

import { StyledFooter } from "./styles"

export const Footer = (props: ComponentProps): React.ReactElement => {
  const {
    children
  } = props

  return (
    <StyledFooter {...props}>{children}</StyledFooter>
  )
}
