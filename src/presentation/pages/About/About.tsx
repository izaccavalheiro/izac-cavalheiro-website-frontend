import * as React from 'react'
import { PageProps } from 'gatsby'
import {
  Link as TLink,
  useTranslation
} from 'gatsby-plugin-react-i18next'

import {
  Div,
  Footer,
  Section,
  H2,
  H3,
  Paragraph,
  List,
  ListItem
} from '../../components'

import {
  Layout,
  Main,
  Nav,
  MainHeader
} from '../../modules'

export function AboutPage(props: PageProps) {
  const {t} = useTranslation()

  const year = '2021'

  return <Layout>
    <Main responsive fullWidth>
      <MainHeader />

      <Nav>
        <List>
          <ListItem>
            <TLink to='/'>{t('Home')}</TLink>
          </ListItem>
          <ListItem>
            <TLink to={`/${t('about')}`}>{t('About')}</TLink>
          </ListItem>
          <ListItem>
            <TLink to={`/${t('contact')}`}>{t('Contact')}</TLink>
          </ListItem>
        </List>
      </Nav>

      <Section id='about-page'>
        <Div>
          <H2 className='text-align-center'>{t('About')}</H2>

          <H3 className='text-align-center'>{t('Summary')}</H3>

          <H3 className='text-align-center'>{t('Biography')}</H3>
        </Div>
      </Section>
      <Footer>
        <Paragraph>{t('Izac Cavalheiro')}, { year }. </Paragraph>
      </Footer>
    </Main>
  </Layout>
}
