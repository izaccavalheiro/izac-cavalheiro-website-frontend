import * as React from "react"

import { ComponentProps } from "../"

import { StyledMain } from "./styles"

interface MainProps extends ComponentProps {
  responsive: boolean
  fullWidth: boolean
}

export const Main = (props: MainProps): React.ReactElement => {
  const {
    children,
    fullWidth,
    responsive,
    id
  } = props

  const persisProps = {
    id,
    responsive,
    fullWidth
  }

  return (
    <StyledMain {...persisProps}>{children}</StyledMain>
  )
}
