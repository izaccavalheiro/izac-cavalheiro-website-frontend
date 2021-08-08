import * as React from "react"
import { PageProps } from "gatsby"
import {
  useTranslation
} from "gatsby-plugin-react-i18next"

import {
  Div,
  Section,
  H2,
  H3
} from "../../components"

import {
  Layout,
  Main,
  MainFooter,
  MainHeader
} from "../../modules"

export function AboutPage(props: PageProps) {
  const {t} = useTranslation()

  const year = "2021"

  return <Layout>
    <Main responsive fullWidth>
      <MainHeader />

      <Section id="about-page">
        <Div>
          <H2 className="text-align-center">{t("About")}</H2>

          <H3 className="text-align-center">{t("Summary")}</H3>

          <H3 className="text-align-center">{t("Biography")}</H3>
        </Div>
      </Section>
      <MainFooter />
    </Main>
  </Layout>
}
