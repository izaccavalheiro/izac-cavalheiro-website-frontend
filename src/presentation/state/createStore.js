import { createStore } from "redux"

import reducers from './reducers'

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);

    localStorage.setItem("state", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("state");

    if (serialisedState === null) return undefined;

    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = () => {
  const createdStore = createStore(reducers, loadFromLocalStorage())

  createdStore.subscribe(() => saveToLocalStorage(createdStore.getState()));

  return createdStore
};

export default store;
