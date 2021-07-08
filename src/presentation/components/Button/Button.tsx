import * as React from "react"

import { ComponentProps } from "../"

import { StyledButton } from "./styles"

interface ButtonProps extends ComponentProps {
  name?: string
  label?: string
}

export const Button = (props: ButtonProps): React.ReactElement => {
  const {
    children,
    name,
    label
  } = props

  const htmlProps = {
    name
  }

  return (
    <StyledButton {...htmlProps}>{children||label}</StyledButton>
  )
}
