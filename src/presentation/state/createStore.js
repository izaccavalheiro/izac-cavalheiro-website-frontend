import { createStore as reduxCreateStore } from "redux"

import getLocalStorageState from "./localStorage"

const reducer = (state, action) => {
  const newState = {...state}

  if (action.type === `SET_DARK_MODE`) {
    localStorage.setItem('darkMode', action.payload)

    return Object.assign({}, newState, {
      darkMode: action.payload,
    })
  }

  return newState
}

const initialState = {
  darkMode: false,
  ...getLocalStorageState()
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
