import * as React from "react"
import {
  useTranslation
} from "gatsby-plugin-react-i18next"

import { ComponentProps } from '../../../components/Default'

import {
  Div,
  H1,
  Paragraph,
  Link
} from "../../../components"

import {
  Wrapper
} from "./styles"

interface SectionProps extends ComponentProps {
  
}

export function Section(props: SectionProps) {
  const {t} = useTranslation()

  const {
    id,
    className
  } = props

  const persistProps = {
    id,
    className
  }

  return <Wrapper {...persistProps}>
    <Div>
      <H1 className="text-align-center">{t("Contact")}</H1>

      <Paragraph><Link href="mailto:izac@izaccavalheiro.com">izac@izaccavalheiro.com</Link></Paragraph>
    </Div>
  </Wrapper>
}
