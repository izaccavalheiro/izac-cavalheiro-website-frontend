import styled from 'styled-components'

export const StyledMain = styled.main`
  ${
    props => props.responsive && props.fullWidth && `display: grid;
    grid-template-areas:
      'header'
      'section'
      'footer';
    grid-gap: 1rem;
    grid-template-rows: auto auto 3rem;
    `
  }

  padding: 1rem;
  max-width: calc(100% - 2rem);
  min-width: calc(100% - 2rem);
  align-items: flex-start;

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

  > section {
    grid-area: section;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
  }

  > footer {
    grid-area: footer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    flex: 0;
    max-height: 3rem;
    min-height: 3rem;

    > p {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
