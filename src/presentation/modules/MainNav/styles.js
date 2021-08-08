import styled from 'styled-components'

import {
  Nav
} from '../../components'

export const Wrapper = styled(Nav)`
  grid-area: nav;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  flex: 1;
  min-height: 4rem;
  display: none;

  > ul {
    flex: 1;
    justify-content: flex-start;
    min-height: 4rem;
    max-height: 4rem;

    > li {
      display: flex;
      justify-content: center;
      align-items: center;flex: 1;
      min-width: unset;
      min-height: 4rem;
      flex: none;
      box-sizing: border-box;

      > a {
        flex: 1;
        min-width: unset;
        min-height: 4rem;
        display: flex;
        align-items: center;
        color: #000;
        transition: .25s ease-in;
        padding: 0 1rem;
        font-size: 1.25rem;

        &:hover {
          background: #000;
          color: #fff;
        }
      }
    }
  }

  &.fixed {
    
  }

  @media(min-width: 20rem) {
    
  }

  @media(min-width: 60rem) {
    display: flex;
  }
`
