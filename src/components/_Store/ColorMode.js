import React, { useState } from 'react'

// create contexts
export const ColorModeContext = React.createContext()
export const ToggleColorModeContext = React.createContext()

// provider
export function ColorModeContextProvider({ children }) {
  // settings
  const colorModeContextData = {
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
  const [colorModeContextState, setColorModeContextState] = useState(true)

  // set state
  const toggleColorModeContextState = () => {
    setColorModeContextState(
      (prevColorModeContextState) => !prevColorModeContextState
    )
  }

  // render
  return (
    <>
      <ColorModeContext.Provider
        value={[colorModeContextState, colorModeContextData]}
      >
        <ToggleColorModeContext.Provider value={toggleColorModeContextState}>
          {children}
        </ToggleColorModeContext.Provider>
      </ColorModeContext.Provider>
    </>
  )
}
