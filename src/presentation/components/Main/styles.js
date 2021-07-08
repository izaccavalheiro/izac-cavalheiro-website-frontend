import styled from 'styled-components'

export const StyledMain = styled.main`
  ${
    props => props.responsive && props.fullWidth && `display: grid;
    grid-template-areas:
      'header'
      'nav'
      'section'
      'footer';
    grid-gap: 2rem;`
  }

  padding: 1rem;

  > header {
    grid-area: header;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }

  > nav {
    grid-area: nav;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }

  > section {
    grid-area: section;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }

  > footer {
    grid-area: footer;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
`
