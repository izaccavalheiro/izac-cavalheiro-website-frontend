import * as React from "react"
import {
  useTranslation
} from "gatsby-plugin-react-i18next"

import { ComponentProps } from '../../../components/Default'

import {
  Div
} from "../../../components"

import{
  Typography
} from '../../../modules'

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
      <Typography tag={'h1'} text={t("Presentation")} className="text-align-center" />

      <Typography tag={'p'} text={t("PresentationText")} />
    </Div>
  </Wrapper>
}
