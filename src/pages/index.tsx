import * as React from "react"
import { graphql, PageProps } from "gatsby"

import { Home } from "../presentation/pages/Home"

export default function Page(props: PageProps): JSX.Element {
  return <>
    <Home {...props} />
  </>
}

function Head() {
  return <>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-53V4B3VRNQ"></script>
    <script>
      {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-53V4B3VRNQ');`}
    </script>
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
