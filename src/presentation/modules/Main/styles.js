import styled from 'styled-components'

export const StyledMain = styled.main`
  ${
    props => props.responsive && props.fullWidth && `display: grid;
    grid-template-areas:
      'header'
      'nav'
      'section'
      'footer';
    grid-gap: 1rem;`
  }

  padding: 1rem;
  max-width: calc(100% - 2rem);
  min-width: calc(100% - 2rem);

  > header {
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    min-width: 100%;
    max-width: 100%;

    > h1 {
      margin-bottom: 0;
    }
  }

  > nav {
    grid-area: nav;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }

  > section {
    grid-area: section;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }

  > footer {
    grid-area: footer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
`
