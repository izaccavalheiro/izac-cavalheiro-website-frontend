import * as React from 'react'
import { PageProps } from 'gatsby'
import {
  Link as TLink,
  useTranslation,
  useI18next
} from 'gatsby-plugin-react-i18next'

import {
  Div,
  Header,
  Footer,
  Section,
  H1,
  H2,
  H3,
  Paragraph,
  List,
  ListItem
} from '../../components'

import {
  Layout,
  Main,
  Logo,
  Nav,
  LanguageSelector
} from '../../modules'

import { useLanguages } from '../../hooks'

export function NotFoundPage(props: PageProps) {
  const {t} = useTranslation()

  const year = '2021'

  const {
    current: currentLanguage,
    data: languages,
    handleChange: handleChangeLanguage
  } = useLanguages()

  return <Layout>
    <Main responsive fullWidth>
      <Header>
        <Logo size='large' />

        <H1 className='text-align-center'>{t('Izac Cavalheiro')}</H1>

        <LanguageSelector current={currentLanguage} data={languages} handleUpdate={() => handleChangeLanguage} />
      </Header>

      <Nav>
        <List>
          <ListItem>
            <TLink to='/'>{t('Home')}</TLink>
          </ListItem>
          <ListItem>
            <TLink to='/NotFound'>{t('About')}</TLink>
          </ListItem>
          <ListItem>
            <TLink to='/contact'>{t('Contact')}</TLink>
          </ListItem>
        </List>
      </Nav>

      <Section id='about-page'>
        <Div>
          <H2 className='text-align-center'>{t('Not Found')}</H2>
        </Div>
      </Section>
      <Footer>
        <Paragraph>{t('Izac Cavalheiro')}, { year }. </Paragraph>
      </Footer>
    </Main>
  </Layout>
}
