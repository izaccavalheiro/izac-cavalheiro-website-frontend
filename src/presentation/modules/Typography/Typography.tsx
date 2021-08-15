import * as React from "react"

import {
  Paragraph,
  H1,
  H2
} from "../../components"

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

export const Typography = ({text, tag = 'p'}) => {
  const rn = '\r\n'
  const n = '\n'
  const linebreak = text.search(rn) ? rn : n
  const textParts = text.split(linebreak)

  if (linebreak === '\r\n') {
    return textParts && textParts.filter(textPartItem => !!textPartItem).map((textPartItem, index) => {
      const key = `typography-element-${tag}-${index}`

      return <Element tag={tag} key={key}>{textPartItem}</Element>
    })
  }

  if (linebreak === '\n') {
    const children = textParts && textParts.filter(textPartItem => !!textPartItem).map((textPartItem, index) => {
      return <>{textPartItem} {index < textParts.length - 1 ? <br /> : null}</>
    })

    return <Element tag={tag}>{children}</Element>
  }

  return <Element tag={tag}>{text}</Element>
}
