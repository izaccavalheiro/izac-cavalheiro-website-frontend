import * as React from "react"
import { connect } from "react-redux"

import { ComponentProps } from "../../components"

import {
  H1,
  Div
} from "../../components"

import { useLanguages } from "../../hooks"

import {
  LanguageSelector,
  Logo
} from "../"

import {
  Wrapper
} from "./styles"

import { MainNav } from "../"

import { darkModeToggle } from "../../state/actions"

interface MainHeaderProps extends ComponentProps {
  darkModeToggle: () => void
}

export const MainHeaderComponent = (props: MainHeaderProps): React.ReactElement => {
  const {
    current: currentLanguage,
    data: languages,
    handleChange: handleChangeLanguage,
    t
  } = useLanguages()

  const {
    darkModeToggle: darkModeToggleFn,
    darkMode
  } = props

  const [menuToggle, setMenuToggle] = React.useState(false)
  const [darkModeToggle, setDarkModeToggle] = React.useState(false)

  function handleMenuToggleClick() {
    setMenuToggle(!menuToggle)
  }

  function handleDarkModeToggleClick() {
    setDarkModeToggle(!darkModeToggle)
    darkModeToggleFn()
  }

  return <Wrapper>
    <Div className="top">
      <Logo size="large" />

      <MainNav active={menuToggle} display={menuToggle} />

      <LanguageSelector current={!languages.includes(currentLanguage) ? 'en' : currentLanguage} data={languages} handleUpdate={() => handleChangeLanguage} />

      <ic-switch dark-mode={darkMode} active={darkModeToggle} onClick={handleDarkModeToggleClick}></ic-switch>

      <ic-menu-toggle dark-mode={darkMode} active={menuToggle} onClick={handleMenuToggleClick}></ic-menu-toggle>
    </Div>
  </Wrapper>
}

const mapStateToProps = ({ darkMode }) => {
  return { darkMode }
}

export const MainHeader = connect(mapStateToProps, { darkModeToggle })(MainHeaderComponent)
