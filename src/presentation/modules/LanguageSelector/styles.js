import styled from 'styled-components'

import { fadeIn } from '../../styles'

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  max-width: 100%;
  min-height: auto;
  max-height: 4rem;
  justify-content: flex-end;
  max-height: 4rem;
  min-height: 4rem;
  overflow: hidden;

  ${fadeIn}

  &:hover {
    max-height: unset;
  }

  &.dark-mode {
    background: #000;

    > ul {
      background: #000;

      > li {
        &.active {
          background: #000;

          > a {
            color: #fff;
            border-color: #fff;
          }
        }

        background: #FFF;

        > a {
          color: #000;
        }
      }
    }
  }

  > ul {
    display: flex;
    flex-direction: column;
    list-style: inside none;
    gap: 1rem;
    min-height: 4rem;

    ${fadeIn}

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

      ${fadeIn}

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
        text-decoration: none;
        transition: all .2s ease-in;

        ${fadeIn}

        &:hover {
          transform: scale(1.25);
          text-decoration: none;
        }
      }
    }
  }

  @media(min-width: 45rem) {
  }
`
