import * as React from "react"

import { ComponentProps } from "../"

import { StyledH2 } from "./styles"

export const H2 = (props: ComponentProps): React.ReactElement => {
  const {
    children,
    className
  } = props

  const persistProps = {
    className
  }

  return (
    <StyledH2 {...persistProps}>{children}</StyledH2>
  )
}
