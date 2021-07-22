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
  onChange?: (event: Event) => void
  checked?: boolean | string
  ref?: any
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
    onChange,
    checked
  } = props

  const persistProps = {
    type,
    name,
    maxLength,
    src,
    value,
    border,
    title,
    alt,
    placeholder,
    onChange,
    checked
  }

  return (
    <StyledInput {...persistProps} />
  )
}
