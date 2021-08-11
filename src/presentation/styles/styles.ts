import { css } from "styled-components"

export const fadeIn = css`
  animation: fadeIn .5s;
  animation-delay: 0s;
  animation-fill-mode: forwards;
  opacity: 0;
  transition: all .5s ease-in;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`

export const slideUp = css`
  animation: slideUp .5s;
  animation-delay: .25s;
  animation-fill-mode: forwards;
  opacity: 0;
  transition: all .5s ease-in;
  position: relative;

  @keyframes slideUp {
    0% {
      top: 10px;
      opacity: 0;
    }

    100% {
      top: 0px;
      opacity: 1;
    }
  }
`

export const defaultClasses = css`
  &.text-align-center {
    text-align: center;
  }

  &.font-weight-bold {
    font-weight: bold;
  }

  &.font-weight-normal {
    font-weight: normal;
  }

  &.display-inline-block {
    display: inline-block;
  }

  &.line-break-anywhere {
    line-break: anywhere;
  }
`
