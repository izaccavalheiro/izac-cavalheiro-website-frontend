export default function getLocalStorageState() {
  const localStorageDarkMode = localStorage.getItem('darkMode')
  const hasLocalStorageDarkMode = localStorageDarkMode ? true : false
  const parsedLocalStorageDarkMode = JSON.parse(localStorage.getItem('darkMode'))
  const darkMode = hasLocalStorageDarkMode ? parsedLocalStorageDarkMode : null;

  return {
    darkMode
  }
}
