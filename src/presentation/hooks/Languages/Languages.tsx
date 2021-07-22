import React, {
  useEffect,
  useState
} from 'react'
import {
  useI18next,
  useTranslation
} from 'gatsby-plugin-react-i18next'

export function useLanguages() {
  const [current, setCurrent] = useState('')
  const {languages, changeLanguage} = useI18next()
  const {t} = useTranslation()

  useEffect(() => {
    const pathname = window.location.pathname
    const breadcrumb = pathname.split('/')
    const language = breadcrumb[1]

    setCurrent(language)

    return () => ({})
  }, [])

  return {
    current,
    data: languages,
    handleChange: changeLanguage,
    t
  }
}
