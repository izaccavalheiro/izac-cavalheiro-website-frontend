import styled from 'styled-components'

import {
  Section
} from "../../../components"

import {
  fadeIn,
  slideUp
} from '../../../styles'

export const Wrapper = styled(Section)`
  overflow-wrap: anywhere;

  &.dark-mode {
    > div {
      > h1 {
        color: #fff;
      }

      > p {
        color: #fff;
      }
    }
  }

  ${fadeIn}

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    > h1 {
      color: #000;

      ${slideUp}
    }

    > p {
      color: #000;
      margin-bottom: 1rem;
      font-size: 1rem;

      ${slideUp}
    }
  }

  @media(min-width: 20rem) {
    > div {
    }
  }

  @media(min-width: 30rem) {
    > div {
      > h1 {
        font-size: 2rem;
        line-height: 2rem;
      }

      > p {
        font-size: 1.5rem;
        line-height: 1.75rem;
      }
    }
  }
`
