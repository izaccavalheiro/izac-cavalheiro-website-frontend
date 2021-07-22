import * as React from "react"

import { ComponentProps } from "../"

import { StyledImage } from "./styles"

interface ImageProps extends ComponentProps {
  src?: string
  alt?: string
  border?: string
  width?: string
  height?: string
  name?: string
}

export const Image = (props: ImageProps): React.ReactElement => {
  const {
    src,
    alt,
    border,
    width,
    height,
    name
  } = props

  const persistProps = {
    src,
    alt,
    border,
    width,
    height,
    name
  }

  return (
    <StyledImage {...persistProps} />
  )
}
