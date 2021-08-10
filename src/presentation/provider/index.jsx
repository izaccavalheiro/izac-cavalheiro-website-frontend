import React from "react"
import { Provider } from "react-redux"

import createStore from "../state/createStore"

function provider({ element }) {
  const store = createStore()
  return <Provider store={store}>{element}</Provider>
}

export default provider
