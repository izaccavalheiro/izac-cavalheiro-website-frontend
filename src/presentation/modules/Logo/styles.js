import styled from 'styled-components'

export const Wrapper = styled.a`
  ${props => props.size === 'large' && (
    `max-width: 100%;
    min-width: 100%;
    max-height: unset;
    min-height: unset;`
  )}

  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    flex: 1;
    min-width: 100%;
    max-width: 100%;
    width: 100%;
    height: auto;
    min-height: auto;
    max-height: unset;
  }

  @media(min-width: 20rem) {
    ${props => props.size === 'large' && (
      `max-width: 10rem;
      min-width: 10rem;
      max-height: unset;
      min-height: unset;`
    )}
  }
`
