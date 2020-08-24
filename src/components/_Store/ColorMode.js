import React, { useState } from 'react'

// create contexts
export const ColorModeContext = React.createContext()
export const ToggleColorModeContext = React.createContext()

// provide
export function ColorModeProvider({ children }) {
  // settings
  const contextStyles = {
    dark: {
      backgroundColor: '#333',
      color: '#fff',
    },
    light: {
      backgroundColor: '#eee',
      color: '#333',
    },
  }

  // state
  const [darkColorModeStatus, setDarkColorModeStatus] = useState(true)

  // set state
  const toggleDarkColorModeStatus = () => {
    setDarkColorModeStatus(
      (prevDarkColorModeStatus) => !prevDarkColorModeStatus
    )
  }

  // render
  return (
    <>
      <ColorModeContext.Provider value={[darkColorModeStatus, contextStyles]}>
        <ToggleColorModeContext.Provider value={toggleDarkColorModeStatus}>
          {children}
        </ToggleColorModeContext.Provider>
      </ColorModeContext.Provider>
    </>
  )
}
