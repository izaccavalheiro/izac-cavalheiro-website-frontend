import * as React from "react"

import {ComponentProps} from "../../components"

import {
  Button,
  Input,
  Span
} from "../../components"

import {
  Wrapper
} from "./styles"

interface ThemeSwitchProps extends ComponentProps {
  current?: string
  handleUpdate?: () => void
}

export const ThemeSwitch = (props: ThemeSwitchProps): React.ReactElement => {
  const {
    className = "",
    id,
    current = false
  } = props

  const persistProps = {
    id
  }

  const [checked, setChecked] = React.useState(current)

  async function handleUpdate(event) {
    await setChecked(!checked)
  }

  return (
    <Wrapper className={`theme-switch ${className}`} {...persistProps}>
      <Button className={`${checked ? "active" : ""}`} onClick={handleUpdate}>
        <Span>Trocar</Span>
      </Button>

      <Input type="checkbox" checked={checked} />
    </Wrapper>
  )
}
