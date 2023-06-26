import * as React from "react"
import { graphql, PageProps } from "gatsby"

import { Home } from "../presentation/pages/Home"

export default function Page(props: PageProps): JSX.Element {
  return <>
    <Home {...props} />
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
