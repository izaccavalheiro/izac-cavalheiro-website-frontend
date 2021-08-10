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
    gap: 1.5rem;
    max-width: 100%;
    list-style: inside none;
    
    > li {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      max-height: 1.5rem;
      min-height: 1.5rem;
      max-width: 1.5rem;
      min-width: 1.5rem;

      > ic-socialnetwork {
        min-width: 100%;
        max-width: 100%;
      }
    }
  }

  @media(min-width: 20rem) {
    
  }

  @media(min-width: 60rem) {
    
  }
`
