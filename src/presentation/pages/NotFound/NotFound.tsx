import * as React from "react"
import { PageProps } from "gatsby"
import {
  Link as TLink,
  useTranslation,
  useI18next
} from "gatsby-plugin-react-i18next"

import {
  Div,
  Footer,
  Section,
  H2,
  H3,
  Paragraph
} from "../../components"

import {
  Layout,
  Main,
  MainNav,
  MainHeader
} from "../../modules"

import { useLanguages } from "../../hooks"

export function NotFoundPage(props: PageProps) {
  const {t} = useTranslation()

  const year = "2021"

  return <Layout>
    <Main responsive fullWidth>
      <MainHeader />

      <MainNav />

      <Section id="about-page">
        <Div>
          <H2 className="text-align-center">{t("Not Found")}</H2>
        </Div>
      </Section>
      <Footer>
        <Paragraph>{t("Izac Cavalheiro")}, { year }. </Paragraph>
      </Footer>
    </Main>
  </Layout>
}
