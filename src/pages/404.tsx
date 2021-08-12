import * as React from "react"
import { graphql, PageProps } from "gatsby"

import { NotFoundPage } from "../presentation/pages/NotFound"

export default function Page(props: PageProps): JSX.Element {
  return <>
    <NotFoundPage {...props} />
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
