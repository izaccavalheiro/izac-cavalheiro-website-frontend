import * as React from "react"
import { connect } from "react-redux"

import logoSource from "./../../assets/images/logo-izac-cavalheiro.png"
import darkModeLogoSource from "./../../assets/images/logo-izac-cavalheiro-inverted.png"

import { ComponentProps } from "../../components"

import {
  Image
} from "../../components"

import {
  Wrapper
} from "./styles"

interface LogoProps extends ComponentProps {
  href?: string
  target?: string
  size?: string
  darkMode?: boolean
}

export const LogoComponent = (props: LogoProps): React.ReactElement => {
  const {
    className,
    href,
    size,
    darkMode
  } = props

  const persistProps = {
    href,
    size
  }

  return (
    <Wrapper className={`logo ${className}`} {...persistProps}>
      <Image src={darkMode ? darkModeLogoSource : logoSource} />
    </Wrapper>
  )
}

const mapStateToProps = ({ darkMode }) => {
  return { darkMode }
}

export const Logo = connect(mapStateToProps, {})(LogoComponent)
