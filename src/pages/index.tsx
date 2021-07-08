import * as React from "react"

import {
  Div,
  Layout,
  Main,
  Logo,
  Link,
  Header,
  Footer,
  Section,
  H1,
  H2,
  Paragraph,
  Nav,
  List,
  ListItem
} from "../presentation/components"

export default function Page(): JSX.Element {
  const year = "2021"

  return (
    <Layout>
      <Main responsive fullWidth>
        <Header>
          <Logo size="large" />

          <H1 className="text-align-center">Izac Cavalheiro</H1>
        </Header>

        <Nav>
          <List>
            <ListItem>
              <Link href="/">Home</Link>
            </ListItem>
          </List>
        </Nav>

        <Section id="home-page">
          <Div>
            <H2 className="text-align-center">Soon…</H2>

            <Paragraph className="text-align-center">Contact me</Paragraph>

            <List>
              <ListItem><Link href="/">LinkedIn</Link></ListItem>
              <ListItem><Link href="/">Facebook</Link></ListItem>
              <ListItem><Link href="/">Twitter</Link></ListItem>
              <ListItem><Link href="/">Medium</Link></ListItem>
              <ListItem><Link href="/">Instagram</Link></ListItem>
              <ListItem><Link href="/">Github</Link></ListItem>
              <ListItem><Link href="/">Codesandbox</Link></ListItem>
              <ListItem><Link href="/">Stackoverflow</Link></ListItem>
            </List>
          </Div>
        </Section>
        <Footer>
          <Paragraph>© Izac Cavalheiro. { year }</Paragraph>
        </Footer>
      </Main>
    </Layout>
  )
}
