import * as React from "react"

import {
  ComponentProps,
  ListItem
} from "../../components"

import {
  Wrapper
} from "./styles"

export const Socialbar = (props: ComponentProps): React.ReactElement => {
  return <Wrapper>
    <ListItem><ic-social-network name="twitter"></ic-social-network></ListItem>
    <ListItem><ic-social-network name="facebook"></ic-social-network></ListItem>
    <ListItem><ic-social-network name="linkedin"></ic-social-network></ListItem>
    <ListItem><ic-social-network name="instagram"></ic-social-network></ListItem>
    <ListItem><ic-social-network name="medium"></ic-social-network></ListItem>
    <ListItem><ic-social-network name="codesandbox"></ic-social-network></ListItem>
    <ListItem><ic-social-network name="github"></ic-social-network></ListItem>
  </Wrapper>
}
