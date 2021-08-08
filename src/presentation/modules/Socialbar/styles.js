import styled from 'styled-components'

import {
  List
} from '../../components'

export const Wrapper = styled(List)`
  @media(min-width: 0rem) {
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    max-width: 100%;
    list-style: inside none;
    
    > li {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media(min-width: 20rem) {
    
  }

  @media(min-width: 60rem) {
    
  }
`
