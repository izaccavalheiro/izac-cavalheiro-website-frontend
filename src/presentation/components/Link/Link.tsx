import * as React from "react"

import { ComponentProps } from "../"

import { StyledLink } from "./styles"

interface LinkProps extends ComponentProps {
  name?: string
  href?: string
  target?: string
  title?: string
}

export const Link = (props: LinkProps): React.ReactElement => {
  const {
    href,
    children,
    target,
    title
  } = props

  return (
    <StyledLink href={href} target={target} title={title}>{children}</StyledLink>
  )
}
