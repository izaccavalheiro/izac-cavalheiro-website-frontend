import styled from 'styled-components'

import { fadeIn } from '../../styles'

export const Wrapper = styled.div`
  @media(min-width: 0rem) {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    min-width: 5rem;
    max-width: 5rem;
    min-height: auto;
    max-height: unset;

    ${fadeIn}

    > button {
      background: #000;
      border: .5rem #000 solid;
      min-width: 5rem;
      max-width: 5rem;
      min-height: 3rem;
      max-height: 3rem;
      display: flex;
      justify-content: flex-start;

      &.active {
        > span {
          margin-left: 2rem;
        }
      }

      > span {
        background: #fff;
        flex: 1;
        min-width: 2rem;
        max-width: 2rem;
        min-height: 2rem;
        max-height: 2rem;
        margin-left: 0rem;
        transition: all .25s ease-in;
        font-size: 0rem;
      }
    }

    > input[type='checkbox'] {
      display: none;
    }
  }

  @media(min-width: 45rem) {
  }
`
