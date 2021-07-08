import React from 'react'

import {ComponentProps} from '../Default'

import {Wrapper} from './styles'

interface TypographyProps extends ComponentProps {

}

export const Typography = (props: TypographyProps) => {
  const {children, className, id} = props

  const persistProps = {
    id,
    className
  }

  return <Wrapper {...persistProps}>{children}</Wrapper>
}
