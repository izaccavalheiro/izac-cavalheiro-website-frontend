import * as React from "react"
import { connect } from "react-redux"

import { useLanguages } from "../../hooks"

import {
  ComponentProps,
  ListItem
} from "../../components"

import {
  Wrapper
} from "./styles"

interface SocialbarComponentProps extends ComponentProps {
  darkMode?: boolean
}

export const SocialbarComponent = (props: SocialbarComponentProps): React.ReactElement => {
  const {
    t
  } = useLanguages()

  const {
    darkMode
  } = props

  return <Wrapper>
    <ListItem><ic-social-network name="twitter" url={t("TwitterURL")} dark-mode={!!darkMode}></ic-social-network></ListItem>
    <ListItem><ic-social-network name="facebook" url={t("FacebookURL")} dark-mode={!!darkMode}></ic-social-network></ListItem>
    <ListItem><ic-social-network name="linkedin" url={t("LinkedInURL")} dark-mode={!!darkMode}></ic-social-network></ListItem>
    <ListItem><ic-social-network name="instagram" url={t("InstagramURL")} dark-mode={!!darkMode}></ic-social-network></ListItem>
    {/* <ListItem><ic-social-network name="medium" url={t("MediumURL")} dark-mode={!!darkMode}></ic-social-network></ListItem> */}
    <ListItem><ic-social-network name="codesandbox" url={t("CodeSandboxURL")} dark-mode={!!darkMode}></ic-social-network></ListItem>
    <ListItem><ic-social-network name="github" url={t("GithubURL")} dark-mode={!!darkMode}></ic-social-network></ListItem>
    <ListItem><ic-social-network name="hackerrank" url={t("HackerRankURL")} dark-mode={!!darkMode}></ic-social-network></ListItem>
  </Wrapper>
}

const mapStateToProps = ({ darkMode }) => {
  return { darkMode }
}

export const Socialbar = connect(mapStateToProps, {})(SocialbarComponent)
