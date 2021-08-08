import * as React from "react"

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

export const MainHeader = (props: ComponentProps): React.ReactElement => {
  const {
    current: currentLanguage,
    data: languages,
    handleChange: handleChangeLanguage,
    t
  } = useLanguages()

  const [menuToggle, setMenuToggle] = React.useState(false)

  function handleMenuToggleClick() {
    setMenuToggle(!menuToggle)
  }

  console.warn(menuToggle)

  return <Wrapper>
    <Div className="top">
      <Logo size="large" />

      <MainNav active={menuToggle} display={menuToggle} />

      <LanguageSelector current={currentLanguage} data={languages} handleUpdate={() => handleChangeLanguage} />

      <ic-switch></ic-switch>

      <ic-menu-toggle active={menuToggle} onClick={handleMenuToggleClick}></ic-menu-toggle>
    </Div>

    <H1 className="text-align-center">{t("Izac Cavalheiro")}</H1>
  </Wrapper>
}
