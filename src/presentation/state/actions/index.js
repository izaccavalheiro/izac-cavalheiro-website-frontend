export const setDarkMode = (payload, isFallback) => {
  if (!isFallback) {
    return { type: `SET_DARK_MODE`, payload }
  } else {
    return { type: `SET_DARK_MODE`, payload, isFallback }
  }
}
