import styled from 'styled-components'

import { defaultClasses } from '../../styles'

export const StyledParagraph = styled.p`
  font-size: 1.5rem;
  color: #000;
  display: flex;
  line-height: 1.5rem;

  ${defaultClasses}

  &:last-child {
    margin-bottom: 0;
  }
`
