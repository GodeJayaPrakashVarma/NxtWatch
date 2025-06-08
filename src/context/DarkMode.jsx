import React from 'react'

const DarkMode = React.createContext({
  isDarkTheme: false,
  changeMode: () => {},
  addToSaved: () => {},
  removeFromSaved: () => {},
  savedList: [],
})

export default DarkMode
