import * as React from "react"

import { ComponentProps } from "../"

import { StyledStrong } from "./styles"

export const Strong = (props: ComponentProps): React.ReactElement => {
  const {
    children
  } = props

  return (
    <StyledStrong>{children}</StyledStrong>
  )
}
