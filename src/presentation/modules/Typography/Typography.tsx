import * as React from "react"

import {
  Paragraph,
  H1,
  H2
} from "../../components"

export const Typography = ({text, tag = 'p'}) => {
  const Element = ({children, tag}) => {
    if (tag === 'p') {
      return <Paragraph>{children}</Paragraph>
    }

    if (tag === 'h1') {
      return <H1>{children}</H1>
    }

    if (tag === 'h2') {
      return <H2>{children}</H2>
    }
  }

  if (text.indexOf('\r\n') >= 0) {
    const textParts = text.split('\r\n')

    return textParts && textParts.filter(textPartItem => !!textPartItem).map((textPartItem) => {
      return <Element tag={tag}>{textPartItem}</Element>
    })
  }

  if (text.indexOf('\n') >= 0) {
    const textParts = text.split('\n')

    const ParagraphBr = textParts && textParts.filter(textPartItem => !!textPartItem).map((textPartItem, index) => {
      return <>{textPartItem} {index < textParts.length - 1 ? <br /> : null}</>
    })

    return <Element tag={tag}>{ParagraphBr}</Element>
  }

  return <Element tag={tag}>{text}</Element>
}
