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

interface AboutComponentProps extends PageProps {
  darkMode?: boolean
}

export function AboutComponent(props: AboutComponentProps) {
  const {t} = useTranslation()

  const {
    darkMode,
    path
  } = props

  return <>
    <Layout pageTitle={t('AboutPageTitle')} pageDescription={t('AboutPageDescription')}>
      <Main responsive fullWidth>
        <MainHeader currentPath={path} />

        <Section id="about-page" className={`${darkMode ? 'dark-mode' : ''}`} />

        <MainFooter />
      </Main>
    </Layout>
  </>
}

const mapStateToProps = (state) => {
  return { darkMode: state.main.darkMode || null }
}

export const About = connect(mapStateToProps, {})(AboutComponent)
