import * as React from "react"
import { connect } from "react-redux"

import {ComponentProps} from "../../components"

import {StyledMain} from "./styles"

interface MainProps extends ComponentProps {
  responsive: boolean
  fullWidth: boolean
  darkMode: boolean
}

export const MainComponent = (props: MainProps): React.ReactElement => {
  const {
    children,
    fullWidth,
    responsive,
    id,
    className,
    darkMode
  } = props

  const persistProps = {
    id,
    responsive,
    fullWidth
  }

  const newClassName = `${className} ${darkMode ? 'dark-mode' : ''}`

  return (
    <StyledMain {...persistProps} className={newClassName}>{children}</StyledMain>
  )
}

const mapStateToProps = ({ darkMode }) => {
  return { darkMode }
}

export const Main = connect(mapStateToProps, {})(MainComponent)
