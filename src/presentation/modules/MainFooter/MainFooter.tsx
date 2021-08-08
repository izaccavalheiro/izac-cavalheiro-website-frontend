import * as React from "react"

import { ComponentProps } from "../../components"

import {
  Socialbar
} from "../"

import {
  Wrapper
} from "./styles"

export const MainFooter = (props: ComponentProps): React.ReactElement => {
  return <Wrapper>
    <Socialbar />
  </Wrapper>
}
