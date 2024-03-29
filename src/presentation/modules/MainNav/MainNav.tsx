import * as React from "react"
import {
  Link as TLink
} from "gatsby-plugin-react-i18next"
import { connect } from "react-redux"

import { ComponentProps } from "../../components"

import {
  List,
  ListItem
} from "../../components"

import {
  useLanguages
} from "../../hooks"

import {
  Wrapper
} from "./styles"

interface MainNavComponentProps extends ComponentProps {
  active: boolean
  display: boolean
  darkMode?: boolean
  currentPath?: string
}

export const MainNavComponent = (props: MainNavComponentProps): React.ReactElement => {
  const {
    t
  } = useLanguages()

  const {
    display,
    active,
    darkMode,
    currentPath = ''
  } = props

  const [mainClassesName, setMainClassesName] = React.useState('')

  React.useEffect(() => {
    if (display && active) {
      setMainClassesName(`${darkMode ? 'dark-mode' : ''} fixed`)

      return () => {
      
      }
    }

    setMainClassesName(`${darkMode ? 'dark-mode' : ''}`)

    return () => {

    }
  }, [
    display,
    active,
    darkMode,
    setMainClassesName
  ])

  return <Wrapper className={mainClassesName}>
    <List>
      <ListItem className={currentPath.indexOf('/about') <  0 && currentPath.indexOf('/contact') < 0 ? 'active' : ''}>
        <TLink to="/">{t("Home")}</TLink>
      </ListItem>
      <ListItem className={currentPath.indexOf('/about') >= 0 ? 'active' : ''}>
        <TLink to="/about">{t("About")}</TLink>
      </ListItem>
      <ListItem className={currentPath.indexOf('/contact') >= 0 ? 'active' : ''}>
        <TLink to="/contact">{t("Contact")}</TLink>
      </ListItem>
    </List>
  </Wrapper>
}

const mapStateToProps = (state) => {
  return { darkMode: state.main.darkMode || null }
}

export const MainNav = connect(mapStateToProps, {})(MainNavComponent)
