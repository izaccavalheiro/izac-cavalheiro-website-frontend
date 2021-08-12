import styled from 'styled-components'

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  > ul {
    list-style: inside none;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    min-width: 100%;
    flex: 1;
    gap: 1rem;

    > li {
      flex: 1;

      > a {
        text-decoration: none;
      }
    }
  }
`
