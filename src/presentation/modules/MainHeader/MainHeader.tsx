import * as React from "react"

import { ComponentProps } from "../../components"

import {
  H1,
  Div
} from "../../components"

import { useLanguages } from "../../hooks"

import {
  LanguageSelector,
  ThemeSwitch,
  Logo
} from "../"

import {
  Wrapper
} from "./styles"

export const MainHeader = (props: ComponentProps): React.ReactElement => {
  const {
    current: currentLanguage,
    data: languages,
    handleChange: handleChangeLanguage,
    t
  } = useLanguages()

  return <Wrapper>
    <Div className="top">
      <ThemeSwitch />

      <LanguageSelector current={currentLanguage} data={languages} handleUpdate={() => handleChangeLanguage} />
    </Div>

    <Logo size="large" />

    <H1 className="text-align-center">{t("Izac Cavalheiro")}</H1>
  </Wrapper>
}
