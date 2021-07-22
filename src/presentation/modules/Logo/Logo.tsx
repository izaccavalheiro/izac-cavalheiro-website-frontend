import * as React from "react"

import logoSource from './../../assets/images/logo-izac-cavalheiro.png'

import { ComponentProps } from '../../components'

import {
  Image
} from '../../components'

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

  const persistProps = {
    href,
    size
  }

  return (
    <Wrapper className={`logo ${className}`} {...persistProps}>
      <Image src={logoSource} />
    </Wrapper>
  )
}
