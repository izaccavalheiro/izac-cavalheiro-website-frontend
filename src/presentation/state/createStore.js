import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  const newState = {...state}

  if (action.type === `DARK_MODE_TOGGLE`) {
    return Object.assign({}, newState, {
      darkMode: !newState.darkMode,
    })
  }

  return newState
}

const initialState = { darkMode: false }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
