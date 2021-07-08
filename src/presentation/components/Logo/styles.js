import styled from 'styled-components'

export const Wrapper = styled.a`
  ${props => props.size === 'large' && (
    `max-width: 80%;
    min-width: 80%;
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
    max-height: auto;
  }
`
