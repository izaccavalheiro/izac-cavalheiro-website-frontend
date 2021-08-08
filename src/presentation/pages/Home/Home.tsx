import * as React from "react"
import { PageProps } from "gatsby"
import {
  useTranslation
} from "gatsby-plugin-react-i18next"

import {
  Div,
  Footer,
  Section,
  H2,
  Paragraph
} from "../../components"

import {
  Layout,
  Main,
  MainHeader,
  MainFooter
} from "../../modules"

export function HomePage(props: PageProps) {
  const {t} = useTranslation()

  return <Layout>
    <Main responsive fullWidth>
      <MainHeader />

      <Section id="home-page">
        <Div>
          <H2 className="text-align-center">{t("Hello World")} <br /> {t("Welcome")}</H2>

          <Paragraph className="text-align-center">{t("HomeText")}</Paragraph>
        </Div>
      </Section>

      <MainFooter />
    </Main>
  </Layout>
}
