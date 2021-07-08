import * as React from "react"

import { ComponentProps } from "../"

import { StyledInput } from "./styles"

interface InputProps extends ComponentProps {
  type?: string
  name?: string
  maxLength?: string
  src?: string
  value?: string
  border?: string
  title?: string
  alt?: string
  placeholder?: string
  onChange?: () => void
}

export const Input = (props: InputProps): React.ReactElement => {
  const {
    name,
    maxLength,
    type,
    src,
    value,
    border,
    title,
    alt,
    placeholder,
    onChange
  } = props

  const htmlProps = {
    type,
    name,
    maxLength,
    src,
    value,
    border,
    title,
    alt,
    placeholder,
    onChange
  }

  return (
    <StyledInput {...htmlProps} />
  )
}
