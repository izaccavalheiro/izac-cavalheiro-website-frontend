import * as React from "react"

import { ComponentProps } from "../"

import { StyledSpan } from "./styles"

export const Span = (props: ComponentProps): React.ReactElement => {
  const {
    children
  } = props

  return (
    <StyledSpan>{children}</StyledSpan>
  )
}
