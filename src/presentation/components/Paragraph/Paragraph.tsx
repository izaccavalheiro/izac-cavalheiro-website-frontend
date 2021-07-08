import * as React from "react"

import { ComponentProps } from "../"

import { StyledParagraph } from "./styles"

export const Paragraph = (props: ComponentProps): React.ReactElement => {
  const {
    children,
    className
  } = props

  const htmlProps = {
    className
  }

  return (
    <StyledParagraph {...htmlProps}>{children}</StyledParagraph>
  )
}
