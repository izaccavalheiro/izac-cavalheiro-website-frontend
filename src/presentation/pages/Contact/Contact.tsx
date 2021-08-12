import * as React from "react"
import { PageProps } from "gatsby"
import {
  useTranslation
} from "gatsby-plugin-react-i18next"
import { connect } from "react-redux"

import {
  Layout,
  Main,
  MainHeader,
  MainFooter
} from "../../modules"

import {
  Section
} from "./Section"

interface ContactComponentProps extends PageProps {
  darkMode?: boolean
}

export function ContactComponent(props: ContactComponentProps) {
  const {t} = useTranslation()

  const {
    darkMode,
    path
  } = props

  return <Layout pageTitle={t('ContactPageTitle')} pageDescription={t('ContactPageDescription')}>
    <Main responsive fullWidth>
      <MainHeader currentPath={path} />

      <Section id="contact-page" className={`${darkMode ? 'dark-mode' : ''}`} />

      <MainFooter />
    </Main>
  </Layout>
}

const mapStateToProps = ({ darkMode }) => {
  return { darkMode }
}

export const Contact = connect(mapStateToProps, {})(ContactComponent)
