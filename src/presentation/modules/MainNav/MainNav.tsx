import * as React from "react"
import {
  Link as TLink,
  useTranslation,
  useI18next
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

export const MainNav = (props: ComponentProps): React.ReactElement => {
  const {
    current: currentLanguage,
    data: languages,
    handleChange: handleChangeLanguage,
    t
  } = useLanguages()

  return <Wrapper>
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
