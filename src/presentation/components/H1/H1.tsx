import * as React from "react"

import { ComponentProps } from "../"

import { StyledH1 } from "./styles"

export const H1 = (props: ComponentProps): React.ReactElement => {
  const {
    children,
    className
  } = props

  const persistProps = {
    className
  }

  return (
    <StyledH1 {...persistProps}>{children}</StyledH1>
  )
}
