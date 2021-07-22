import * as React from "react"

import {ComponentProps} from "../../components"

import {
  Link,
  List,
  ListItem
} from "../../components"

import {
  Wrapper
} from "./styles"

interface LanguageSelectorProps extends ComponentProps {
  current?: string
  data?: any
  handleUpdate?: () => void
}

export const LanguageSelector = (props: LanguageSelectorProps): React.ReactElement => {
  const {
    className = "",
    id,
    data,
    current
  } = props

  const persistProps = {
    id
  }

  return (
    <Wrapper className={`language-selector ${className}`} {...persistProps}>
      <List>
        {data.map((languageItem, index) => {
          const key = `language-selector-list-item-${index}`
          const linkHref = languageItem !== "en" ? `/${languageItem}` : "/"
          const language = current || "en"

          return <ListItem key={key} className={`${language === languageItem ? "active" : ""}`}>
            <Link href={linkHref} title={`${languageItem}`}>{languageItem}</Link>
          </ListItem>
        })}
      </List>
    </Wrapper>
  )
}
