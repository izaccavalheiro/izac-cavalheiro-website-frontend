import * as React from "react"

import { ComponentProps } from "../"

import { StyledDiv } from "./styles"

export const Div = (props: ComponentProps): React.ReactElement => {
  const {
    children
  } = props

  return (
    <StyledDiv {...props}>{children}</StyledDiv>
  )
}
