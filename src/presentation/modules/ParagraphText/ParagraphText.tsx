import * as React from "react"

import {
  Paragraph
} from "../../components"

export const ParagraphText = ({text}) => {
  const textParts = text.split('\r\n')

  return textParts && textParts.filter(textPartItem => !!textPartItem).map((textPartItem) => {
    return <Paragraph>{textPartItem}</Paragraph>
  })
}
