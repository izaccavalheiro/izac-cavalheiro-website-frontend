import * as React from "react"

import logoSource from './../../assets/images/logo-izac-cavalheiro.png'

import { ComponentProps } from '../'

import {
  Image,
  Link
} from '../'

import {
  Wrapper
} from './styles'

interface LogoProps extends ComponentProps {
  href?: string
  target?: string
  size?: string
}

export const Logo = (props: LogoProps): React.ReactElement => {
  const {
    className,
    href,
    size
  } = props

  const persisProps = {
    href,
    className,
    size
  }

  return (
    <Wrapper {...persisProps}>
      <Image src={logoSource} />
    </Wrapper>
  )
}
