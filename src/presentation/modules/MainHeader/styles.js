import styled from 'styled-components'

import {
  Header
} from '../../components'

export const Wrapper = styled(Header)`
  flex-direction: column;
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-width: 100%;
  max-width: 100%;
  z-index: 1;

  > h1 {
    margin-bottom: 0;
  }

  > div {
    &.top {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      min-width: 100%;
      min-height: 4rem;
      max-height: 4rem;

      &.show-nav {
        min-height: 9rem;
        max-height: 9rem;
        align-items: flex-start;

        > ic-switch {
          transform: translateY(1rem);
        }

        > ic-menu-toggle {
          transform: translateY(1rem);
        }
      }
    }
  }

  ic-menu-toggle {
    flex: none;
  }

  .language-selector {
    flex: none;
  }

  .logo {
    max-width: 4rem;
    min-width: 4rem;
    max-height: unset;
    min-height: unset;
  }

  @media(min-width: 15rem) {
    > div {
      &.top {
        flex-direction: row;
      }
    }
  }

  @media(min-width: 20rem) {
    > div {
      &.top {
        flex-direction: row;
      }
    }
  }

  @media(min-width: 35rem) {
    ic-menu-toggle {
      display: none;
    }
  }
`
