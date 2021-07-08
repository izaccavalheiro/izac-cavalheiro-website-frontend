import * as React from "react"

import { ComponentProps } from "../"

import { StyledNav } from "./styles"

export const Nav = (props: ComponentProps): React.ReactElement => {
  const {
    children
  } = props

  return (
    <StyledNav {...props}>{children}</StyledNav>
  )
}
