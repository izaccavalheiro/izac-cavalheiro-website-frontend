import * as React from "react"

import { ComponentProps } from "../"

import { StyledForm } from "./styles"

interface FormProps extends ComponentProps {
  action?: string
  method?: string
  target?: string
}

export const Form = (props: FormProps): React.ReactElement => {
  const {
    children,
    action,
    method,
    target
  } = props

  const persistProps = {
    action,
    method,
    target
  }

  return (
    <StyledForm {...persistProps}>{children}</StyledForm>
  )
}
