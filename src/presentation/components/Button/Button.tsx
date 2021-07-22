import * as React from "react"

import { ComponentProps } from "../"

import { StyledButton } from "./styles"

interface ButtonProps extends ComponentProps {
  name?: string
  label?: string
  onClick?: (event: Event) => void
  active?: boolean
}

export const Button = (props: ButtonProps): React.ReactElement => {
  const {
    children,
    name,
    label,
    onClick,
    className
  } = props

  const persistProps = {
    name,
    onClick,
    className
  }

  return (
    <StyledButton {...persistProps}>{children||label}</StyledButton>
  )
}
