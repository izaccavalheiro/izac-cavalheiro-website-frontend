import * as React from "react"
import { graphql, PageProps } from "gatsby"

import { Contact } from "../presentation/pages/Contact"

export default function Page(props: PageProps): JSX.Element {
  return <>
    <Contact {...props} />
  </>
}

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
