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

interface HomeComponentProps extends PageProps {
  darkMode?: boolean
}

export function HomeComponent(props: HomeComponentProps) {
  const {t} = useTranslation()

  const {
    darkMode
  } = props

  console.warn('props: ', props)

  return <Layout>
    <Main responsive fullWidth>
      <MainHeader />

      <Section id="home-page" className={`${darkMode ? 'dark-mode' : ''}`} />

      <MainFooter />
    </Main>
  </Layout>
}

const mapStateToProps = ({ darkMode }) => {
  return { darkMode }
}

export const Home = connect(mapStateToProps, {})(HomeComponent)
