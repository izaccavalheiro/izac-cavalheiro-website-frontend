import * as React from "react"
import {
  useTranslation
} from "gatsby-plugin-react-i18next"

import { ComponentProps } from '../../../components/Default'

import {
  Div,
  H1,
  Paragraph
} from "../../../components"

import {
  Wrapper
} from "./styles"

interface SectionProps extends ComponentProps {
  
}

const ParagraphText = ({text}) => {
  const textParts = text.split('\r\n')

  return textParts && textParts.filter(textPartItem => !!textPartItem).map((textPartItem) => {
    return <Paragraph className="text-align-center">{textPartItem}</Paragraph>
  })
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
      <H1 className="text-align-center">{t("Presentation")}</H1>

      <ParagraphText text={t("ExtraPresentation")} />
    </Div>
  </Wrapper>
}
