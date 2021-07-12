import * as React from "react"

import {ComponentProps} from "../../components"

import {StyledMain} from "./styles"

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

  const persistProps = {
    id,
    responsive,
    fullWidth
  }

  return (
    <StyledMain {...persistProps}>{children}</StyledMain>
  )
}
