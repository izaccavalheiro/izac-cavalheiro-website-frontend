import * as React from "react"

import { ComponentProps } from "../"

import { StyledH3 } from "./styles"

export const H3 = (props: ComponentProps): React.ReactElement => {
  const {
    children,
    className
  } = props

  const persistProps = {
    className
  }

  return (
    <StyledH3 {...persistProps}>{children}</StyledH3>
  )
}
