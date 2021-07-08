import * as React from "react"

import { ComponentProps } from ".."

import { StyledSection } from "./styles"

export const Section = (props: ComponentProps): React.ReactElement => {
  const {
    children
  } = props

  return (
    <StyledSection {...props}>{children}</StyledSection>
  )
}
