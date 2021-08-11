import styled from 'styled-components'

import {
  List
} from '../../components'

export const Wrapper = styled(List)`
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  max-width: 100%;
  list-style: inside none;
  
  > li {
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;

    > ic-socialnetwork {
      min-width: 100%;
      max-width: 100%;
    }
  }

  @media(min-width: 30rem) {
    gap: .75rem;
  }

  @media(min-width: 60rem) {
    gap: 1rem;
  }
`
