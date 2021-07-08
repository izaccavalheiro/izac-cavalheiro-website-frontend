import * as React from "react"

import {
  Div,
  Layout,
  Main,
  Logo,
  Link,
  H1,
  H2,
  Paragraph
} from '../presentation/components'

export default function Page(): JSX.Element {
  return (
    <Layout>
      <Main>
        <Logo />

        <H1>Izac Cavalheiro</H1>

        <Div>
          <H2 className='text-align-center'>404 - Page not found</H2>

          <Paragraph className='text-align-center'>
            <Link href="/">Home</Link>
          </Paragraph>
        </Div>
      </Main>
    </Layout>
  )
}
