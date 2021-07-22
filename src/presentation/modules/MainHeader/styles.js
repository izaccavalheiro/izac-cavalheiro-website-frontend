import styled from 'styled-components'

import {
  Header
} from '../../components'

export const Wrapper = styled(Header)`
  @media(min-width: 0rem) {
    flex-direction: column;
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    min-width: 100%;
    max-width: 100%;

    > h1 {
      margin-bottom: 0;
    }
  }

  @media(min-width: 20rem) {
    
  }

  @media(min-width: 60rem) {
  }
`
