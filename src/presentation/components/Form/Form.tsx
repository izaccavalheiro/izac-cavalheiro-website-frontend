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

  const htmlProps = {
    action,
    method,
    target
  }

  return (
    <StyledForm {...htmlProps}>{children}</StyledForm>
  )
}
