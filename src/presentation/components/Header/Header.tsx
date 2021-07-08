import * as React from "react"

import { ComponentProps } from "../"

import { StyledHeader } from "./styles"

export const Header = (props: ComponentProps): React.ReactElement => {
  const {
    children
  } = props

  return (
    <StyledHeader {...props}>{children}</StyledHeader>
  )
}
