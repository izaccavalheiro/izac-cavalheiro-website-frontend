import * as React from "react"
import {
  useTranslation
} from "gatsby-plugin-react-i18next"

import { ComponentProps } from '../../../components/Default'

import{
  Typography
} from '../../../modules'

import {
  Div,
  H1,
  H2
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
      <H1 className="text-align-center">{t("About")}</H1>

      <Typography tag={'p'} text={t("SummaryText")} />

      <H2 className="text-align-center">{t("Biography")}</H2>

      <Typography tag={'p'} text={t("BiographyText")} />
    </Div>
  </Wrapper>
}
