import styled from 'styled-components'

import {
  Section
} from "../../../components"

import {
  fadeIn,
  slideUp
} from '../../../styles'

export const Wrapper = styled(Section)`
  &.dark-mode {
    > div {
      > h1 {
        color: #fff;
      }

      > h2 {
        color: #fff;
      }

      > p {
        color: #fff;
      }
    }
  }

  ${fadeIn}

  > div {
    max-width: 100%;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    > h1, > h2 {
      color: #000;
      font-size: 1.5rem;
      line-height: 1.5rem;

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
      max-width: 100%;
      min-width: 100%;

      > p {
        font-size: 1rem;
      }
    }
  }

  @media(min-width: 30rem) {
    > div {
      > h1, > h2 {
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
