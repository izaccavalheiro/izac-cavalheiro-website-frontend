import styled from 'styled-components'

import {
  Nav
} from '../../components'

export const Wrapper = styled(Nav)`
  @media(min-width: 0rem) {
    grid-area: nav;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    min-width: 100%;
    max-width: 100%;
  }

  @media(min-width: 20rem) {
    
  }

  @media(min-width: 60rem) {
    
  }
`
