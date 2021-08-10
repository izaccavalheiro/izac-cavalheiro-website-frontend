import styled from 'styled-components'

import {
  Section
} from "../../../components"

import { fadeIn } from '../../../styles'

export const Wrapper = styled(Section)`
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
    max-width: 95%;
    min-width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h1 {
      color: #000;
      font-size: 2rem;

      ${fadeIn}
    }

    > p {
      color: #000;
      margin-bottom: 1rem;
      font-size: 1rem;

      ${fadeIn}

      > a {
        color: #000;
      }
    }
  }

  @media(min-width: 20rem) {
    > div {
      max-width: 100%;
      min-width: 100%;

      > h1 {
        font-size: 1.5rem;
      }

      > p {
        font-size: 1rem;
      }
    }
  }

  @media(min-width: 30rem) {
    > div {
      max-width: 100%;
      min-width: 100%;

      > h1 {
        font-size: 2rem;
      }

      > p {
        font-size: 1.5rem;
      }
    }
  }
`
