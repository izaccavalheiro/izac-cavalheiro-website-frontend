import * as React from "react"
import { connect } from "react-redux"

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
  darkMode?: boolean
}

export const LanguageSelectorComponent = (props: LanguageSelectorProps): React.ReactElement => {
  const {
    className = "",
    id,
    data,
    current,
    darkMode
  } = props

  const persistProps = {
    id
  }

  const currentHref = `/${current === 'en' ? '' : current}`

  const newClassName = `language-selector ${className} ${darkMode ? 'dark-mode' : ''}`

  return (
    <Wrapper className={newClassName} {...persistProps}>
      <List>
        <ListItem className={`active`}>
          <Link href={currentHref} title={`${current || 'en'}`}>{current || 'en'}</Link>
        </ListItem>
        {data.filter(filteredItem => ((filteredItem !== current && current) || !current && filteredItem !== 'en')).map((languageItem, index) => {
          const key = `language-selector-list-item-${index}`
          const linkHref = `/${languageItem === 'en' ? '' : languageItem}`

          return <ListItem key={key}>
            <Link href={linkHref} title={`${languageItem || 'en'}`}>{languageItem || 'en'}</Link>
          </ListItem>
        })}
      </List>
    </Wrapper>
  )
}

const mapStateToProps = ({ darkMode }) => {
  return { darkMode }
}

export const LanguageSelector = connect(mapStateToProps, {})(LanguageSelectorComponent)
