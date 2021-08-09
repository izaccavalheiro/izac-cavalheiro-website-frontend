import * as React from "react"
import { PageProps } from "gatsby"
import {
  useTranslation
} from "gatsby-plugin-react-i18next"

import {
  Div,
  H1,
  Section,
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
          <H1 className="text-align-center">{t("Presentation")}</H1>

          <Paragraph className="text-align-center">{t("ExtraPresentation")}</Paragraph>
        </Div>
      </Section>

      <MainFooter />
    </Main>
  </Layout>
}
