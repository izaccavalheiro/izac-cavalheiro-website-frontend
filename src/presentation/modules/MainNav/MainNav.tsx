import * as React from "react"
import {
  Link as TLink
} from "gatsby-plugin-react-i18next"

import { ComponentProps } from "../../components"

import {
  List,
  ListItem
} from "../../components"

import { useLanguages } from "../../hooks"

import {
  Wrapper
} from "./styles"

interface MainNavProps extends ComponentProps {
  active: boolean
  display: boolean
}

export const MainNav = (props: MainNavProps): React.ReactElement => {
  const {
    t
  } = useLanguages()

  const {
    display,
    active
  } = props

  const [mainClassesName, setMainClassesName] = React.useState('')

  React.useEffect(() => {
    console.warn('props: ', props)
    
    if (display && active) {
      setMainClassesName('fixed')

      return () => {
      
      }
    }

    setMainClassesName('')

    return () => {

    }
  }, [
    display,
    active,
    setMainClassesName
  ])

  console.warn('> ', mainClassesName)

  return <Wrapper className={mainClassesName}>
    <List>
      <ListItem>
        <TLink to="/">{t("Home")}</TLink>
      </ListItem>
      <ListItem>
        <TLink to="/about">{t("About")}</TLink>
      </ListItem>
      <ListItem>
        <TLink to="/contact">{t("Contact")}</TLink>
      </ListItem>
    </List>
  </Wrapper>
}
