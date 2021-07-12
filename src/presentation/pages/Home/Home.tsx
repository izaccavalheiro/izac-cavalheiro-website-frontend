import * as React from 'react'
import { PageProps } from 'gatsby'
import {Link as TLink, useTranslation} from 'gatsby-plugin-react-i18next'

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
} from '../../components'

export function HomePage(props: PageProps) {
  const {t} = useTranslation()

  const year = '2021'

  return <Layout>
    <Main responsive fullWidth>
      <Header>
        <Logo size='large' />

        <H1 className='text-align-center'>{t('Izac Cavalheiro')}</H1>

        <LanguageSelector />
      </Header>

      <Nav>
        <List>
          <ListItem>
            <TLink to='/'>{t('Home')}</TLink>
          </ListItem>
          <ListItem>
            <TLink to='/about'>{t('About')}</TLink>
          </ListItem>
          <ListItem>
            <TLink to='/contact'>{t('Contact')}</TLink>
          </ListItem>
        </List>
      </Nav>

      <Section id='home-page'>
        <Div>
          <H2 className='text-align-center'>{t('Welcome')}</H2>

          <Paragraph className='text-align-center'>{t('Social Network')}</Paragraph>

          <List>
            <ListItem><Link href='/'>{t('Twitter')}</Link></ListItem>
            <ListItem><Link href='/'>{t('Facebook')}</Link></ListItem>
            <ListItem><Link href='/'>{t('LinkedIn')}</Link></ListItem>
            <ListItem><Link href='/'>{t('Instagram')}</Link></ListItem>
            <ListItem><Link href='/'>{t('Medium')}</Link></ListItem>
            <ListItem><Link href='/'>{t('StackOverflow')}</Link></ListItem>
            <ListItem><Link href='/'>{t('CodeSandbox')}</Link></ListItem>
            <ListItem><Link href='/'>{t('JSFiddle')}</Link></ListItem>
            <ListItem><Link href='/'>{t('Notion')}</Link></ListItem>
            <ListItem><Link href='/'>{t('Github')}</Link></ListItem>
          </List>
        </Div>
      </Section>
      <Footer>
        <Paragraph>{t('Izac Cavalheiro')}, { year }. </Paragraph>
      </Footer>
    </Main>
  </Layout>
}
