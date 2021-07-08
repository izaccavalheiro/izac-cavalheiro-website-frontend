import * as React from "react"

import { ComponentProps } from "../"

import { StyledLink } from "./styles"

interface LinkProps extends ComponentProps {
  name?: string
  href?: string
  target?: string
}

export const Link = (props: LinkProps): React.ReactElement => {
  const {
    href,
    children
  } = props

  return (
    <StyledLink href={href}>{children}</StyledLink>
  )
}
