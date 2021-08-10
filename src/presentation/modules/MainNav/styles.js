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

  &.dark-mode {
    > ul {
      > li {
        a {
          color: #fff;

          &:hover {
            background: #fff;
            color: #000;
          }
        }
      }
    }
  }

  > ul {
    flex: 1;
    justify-content: flex-start;
    min-height: 4rem;
    max-height: 4rem;

    > li {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      min-width: unset;
      min-height: 4rem;
      box-sizing: border-box;

      > a {
        flex: 1;
        min-width: unset;
        min-height: 4rem;
        display: flex;
        align-items: center;
        color: #000;
        transition: .25s ease-in;
        padding: 0 .75rem;
        font-size: 1.25rem;
        justify-content: center;

        &:hover {
          background: #000;
          color: #fff;
        }
      }
    }
  }

  &.fixed {
    position: absolute;
    left: 1rem;
    top: 6rem;
    display: flex;
    min-width: calc(100% - 2rem);

    > ul {
      min-width: 100%;
    }
  }

  @media(min-width: 35rem) {
    display: flex;

    > ul {
      align-items: flex-start;

      > li {
        flex: none;
      }
    }
  }

  @media(min-width: 60rem) {
    &.fixed {
      position: relative;
      left: auto;
      top: auto;
    }
  }
`
