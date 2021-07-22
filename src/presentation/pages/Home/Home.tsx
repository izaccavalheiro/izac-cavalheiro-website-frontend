import * as React from "react"
import { PageProps } from "gatsby"
import {
  Link as TLink,
  useTranslation,
  useI18next
} from "gatsby-plugin-react-i18next"

import {
  Div,
  Link,
  Footer,
  Section,
  H2,
  Paragraph,
  List,
  ListItem
} from "../../components"

import {
  Layout,
  Main,
  Nav,
  MainHeader,
  MainNav
} from "../../modules"

import { useLanguages } from "../../hooks"

export function HomePage(props: PageProps) {
  const {t} = useTranslation()
  const year = "2021"

  return <Layout>
    <Main responsive fullWidth>
      <MainHeader />

      <MainNav />

      

      <Section id="home-page">
        <Div>
          <H2 className="text-align-center">{t("Welcome")}</H2>

          <Paragraph className="text-align-center">{t("Social Network")}</Paragraph>

          <List>
            <ListItem><Link href="/">{t("Twitter")}</Link></ListItem>
            <ListItem><Link href="/">{t("Facebook")}</Link></ListItem>
            <ListItem><Link href="/">{t("LinkedIn")}</Link></ListItem>
            <ListItem><Link href="/">{t("Instagram")}</Link></ListItem>
            <ListItem><Link href="/">{t("Medium")}</Link></ListItem>
            <ListItem><Link href="/">{t("StackOverflow")}</Link></ListItem>
            <ListItem><Link href="/">{t("CodeSandbox")}</Link></ListItem>
            <ListItem><Link href="/">{t("JSFiddle")}</Link></ListItem>
            <ListItem><Link href="/">{t("Notion")}</Link></ListItem>
            <ListItem><Link href="/">{t("Github")}</Link></ListItem>
          </List>
        </Div>
      </Section>
      <Footer>
        <Paragraph>{t("Izac Cavalheiro")}, { year }. </Paragraph>
      </Footer>
    </Main>
  </Layout>
}
