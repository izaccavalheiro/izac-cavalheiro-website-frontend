import styled from 'styled-components'

import { fadeIn } from '../../styles'

export const StyledMain = styled.main`
  ${
    props => props.responsive && props.fullWidth && `display: grid;
    grid-template-areas:
      'header'
      'section'
      'footer';
    grid-gap: 1rem;
    grid-template-rows: auto auto auto;
    `
  }

  max-width: 100%;
  min-width: 100%;
  align-items: flex-start;
  background: #fff;
  box-sizing: border-box; 
  padding: 1rem;

  ${fadeIn}

  &.dark-mode {
    background: #000;
  }

  > section {
    grid-area: section;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
  }
`
