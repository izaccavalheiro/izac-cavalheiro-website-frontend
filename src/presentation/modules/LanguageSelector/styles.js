import styled from 'styled-components'

import { fadeIn } from '../../styles'

export const Wrapper = styled.div`
  @media(min-width: 0rem) {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    min-width: 100%;
    max-width: 100%;
    min-height: auto;
    max-height: unset;
    justify-content: flex-end;

    ${fadeIn}

    > ul {
      display: flex;
      flex-direction: row;
      list-style: inside none;
      gap: 1rem;

      > li {
        background: #000;
        min-width: 4rem;
        max-width: 4rem;
        min-height: 4rem;
        max-height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0rem none;
        box-sizing: border-box;

        &.active {
          min-width: 3rem;
          max-width: 3rem;
          min-height: 3rem;
          max-height: 3rem;
          background: #fff;
          border: .5rem #000 solid;
          box-sizing: unset;

          > a {
            color: #000;
          }
        }

        > a {
          text-decoration: none;
          color: #fff;
          text-transform: uppercase;
          font-size: 1rem;
        }
      }
    }
  }

  @media(min-width: 45rem) {
  }
`
