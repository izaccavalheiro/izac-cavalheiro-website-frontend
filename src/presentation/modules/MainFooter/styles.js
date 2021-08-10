import styled from 'styled-components'

import {
  Footer
} from '../../components'

export const Wrapper = styled(Footer)`
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  flex: 0;
  min-height: 3rem;
  padding-bottom: 2rem;

  > p {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media(min-width: 20rem) {
    
  }

  @media(min-width: 60rem) {
    
  }
`
