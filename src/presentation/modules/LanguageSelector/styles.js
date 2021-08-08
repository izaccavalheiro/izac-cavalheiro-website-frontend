import styled from 'styled-components'

import { fadeIn } from '../../styles'

export const Wrapper = styled.div`
  @media(min-width: 0rem) {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    max-width: 100%;
    min-height: auto;
    max-height: 4rem;
    justify-content: flex-end;

    ${fadeIn}

    > ul {
      display: flex;
      flex-direction: column;
      list-style: inside none;
      gap: 1rem;
      max-height: 4rem;
      min-height: 4rem;
      overflow: hidden;

      &:hover {
        max-height: unset;
      }

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
        flex: 1;
        cursor: pointer;

        &.active {
          background: #fff;

          > a {
            color: #000;
            border: .5rem #000 solid;
          }
        }

        > a {
          flex: 1;
          text-decoration: none;
          color: #fff;
          text-transform: uppercase;
          font-size: 1rem;
          min-width: 4rem;
          max-width: 4rem;
          min-height: 4rem;
          max-height: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
        }
      }
    }
  }

  @media(min-width: 45rem) {
  }
`
