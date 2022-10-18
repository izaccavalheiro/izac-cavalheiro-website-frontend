import * as React from "react"
import { connect } from "react-redux"

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
    darkMode
  } = props

  return <Wrapper>
    <ListItem><ic-social-network name="twitter" dark-mode={!!darkMode}></ic-social-network></ListItem>
    <ListItem><ic-social-network name="facebook" dark-mode={!!darkMode}></ic-social-network></ListItem>
    <ListItem><ic-social-network name="linkedin" dark-mode={!!darkMode}></ic-social-network></ListItem>
    <ListItem><ic-social-network name="instagram" dark-mode={!!darkMode}></ic-social-network></ListItem>
    <ListItem><ic-social-network name="medium" dark-mode={!!darkMode}></ic-social-network></ListItem>
    <ListItem><ic-social-network name="codesandbox" dark-mode={!!darkMode}></ic-social-network></ListItem>
    <ListItem><ic-social-network name="github" dark-mode={!!darkMode}></ic-social-network></ListItem>
    <ListItem><ic-social-network name="hackerrank" dark-mode={!!darkMode}></ic-social-network></ListItem>
  </Wrapper>
}

const mapStateToProps = ({ darkMode }) => {
  return { darkMode }
}

export const Socialbar = connect(mapStateToProps, {})(SocialbarComponent)
