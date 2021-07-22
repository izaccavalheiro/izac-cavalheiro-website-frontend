import * as React from "react"

import { ComponentProps } from "../"

import { StyledParagraph } from "./styles"

export const Paragraph = (props: ComponentProps): React.ReactElement => {
  const {
    children,
    className
  } = props

  const persistProps = {
    className
  }

  return (
    <StyledParagraph {...persistProps}>{children}</StyledParagraph>
  )
}
