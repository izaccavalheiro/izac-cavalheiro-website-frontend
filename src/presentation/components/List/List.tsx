import * as React from "react"

import { ComponentProps } from "../"

import { StyledList } from "./styles"

export const List = (props: ComponentProps): React.ReactElement => {
  const {
    children
  } = props

  return (
    <StyledList {...props}>{children}</StyledList>
  )
}
