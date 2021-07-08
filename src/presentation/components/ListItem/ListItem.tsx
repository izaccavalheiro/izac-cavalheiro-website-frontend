import * as React from "react"

import { ComponentProps } from ".."

import { StyledListItem } from "./styles"

export const ListItem = (props: ComponentProps): React.ReactElement => {
  const {
    children
  } = props

  return (
    <StyledListItem {...props}>{children}</StyledListItem>
  )
}
