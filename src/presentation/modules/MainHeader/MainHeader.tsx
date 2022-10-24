import * as React from "react"
import { connect } from "react-redux"

import { ComponentProps } from "../../components"

import {
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

import { setDarkMode } from "../../state/actions"

interface MainHeaderProps extends ComponentProps {
  setDarkMode: (a: boolean) => void
  darkMode?: string
  currentPath: string
}

export const MainHeaderComponent = (props: MainHeaderProps): React.ReactElement => {
  const {
    current: currentLanguage,
    data: languages,
    handleChange: handleChangeLanguage,
    t
  } = useLanguages()

  const {
    setDarkMode,
    darkMode,
    currentPath
  } = props

  const [menuToggle, setMenuToggle] = React.useState(false)

  function handleMenuToggleClick() {
    if (menuToggle) {
      setMenuToggle(false)
    } else {
      setMenuToggle(true)
    }
  }

  function handleDarkModeToggleClick() {
    if (darkMode) {
      setDarkMode(false)
    } else {
      setDarkMode(true)
    }
  }

  React.useEffect(() => {
    if (darkMode === null) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode(true)
      } else {
        setDarkMode(false)
      }

      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (event.matches) {
          setDarkMode(true)
        } else {
          setDarkMode(false)
        }
      });
    }
  }, [
    darkMode,
    setDarkMode
  ])

  return <Wrapper>
    <Div className={`top ${!!menuToggle ? 'show-nav' : ''}`}>
      <Logo size="large" alt={t("LogoAltText")} href={`/${currentLanguage}`} />

      <MainNav currentPath={currentPath} active={menuToggle} display={menuToggle} />

      <LanguageSelector current={!languages.includes(currentLanguage) ? 'en' : currentLanguage} data={languages} handleUpdate={() => handleChangeLanguage} />

      <ic-switch dark-mode={darkMode} active={darkMode} onClick={handleDarkModeToggleClick} label={t("DarkModeToggleLabel")}></ic-switch>

      <ic-menu-toggle dark-mode={darkMode} active={menuToggle} onClick={handleMenuToggleClick} label={t("MenuToggleLabel")}></ic-menu-toggle>
    </Div>
  </Wrapper>
}

const mapStateToProps = ({ darkMode }) => {
  return { darkMode }
}

export const MainHeader = connect(mapStateToProps, { setDarkMode })(MainHeaderComponent)
