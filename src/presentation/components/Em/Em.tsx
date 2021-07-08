import * as React from "react"

import { ComponentProps } from "../"

import { StyledEm } from "./styles"

export const Em = (props: ComponentProps): React.ReactElement => {
  const {
    children
  } = props

  return (
    <StyledEm>{children}</StyledEm>
  )
}
