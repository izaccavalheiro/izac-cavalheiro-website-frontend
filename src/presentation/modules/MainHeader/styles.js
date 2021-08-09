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
  max-height: 18rem;

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

  @media(min-width: 60rem) {
    ic-menu-toggle {
      display: none;
    }
  }
`
