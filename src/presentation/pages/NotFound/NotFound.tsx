import * as React from "react"
import { PageProps } from "gatsby"
import {
  useTranslation
} from "gatsby-plugin-react-i18next"

import {
  Div,
  Section,
  H1
} from "../../components"

import {
  Layout,
  Main,
  MainFooter,
  MainHeader
} from "../../modules"

export function NotFoundPage(props: PageProps) {
  const {t} = useTranslation()

  return <Layout>
    <Main responsive fullWidth>
      <MainHeader />

      <Section id="not-found-page">
        <Div>
          <H1 className="text-align-center">{t("Not Found")}</H1>
        </Div>
      </Section>
      
      <MainFooter />
    </Main>
  </Layout>
}
