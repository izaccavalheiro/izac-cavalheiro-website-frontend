const reducer = (state, action) => {
  const newState = {...state}

  if (action.type === `SET_DARK_MODE`) {
    const updatedState = {...newState}

    if (action.isFallback) {
      const localStorageState = localStorage && JSON.parse(localStorage.getItem('state'))

      return Object.assign({}, updatedState, {
        darkMode: localStorageState && localStorageState.main && typeof localStorageState.main.darkMode === 'boolean' ? localStorageState.main.darkMode : action.payload,
      })
    } else {
      return Object.assign({}, updatedState, {
        darkMode: action.payload,
      })
    }
  } 
  
  return newState
}

export default reducer
