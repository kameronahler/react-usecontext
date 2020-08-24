import React, { useState } from 'react'

// create contexts
export const ColorModeContext = React.createContext()
export const ToggleColorModeContext = React.createContext()

// provider
export function ColorModeContextProvider({ children }) {
  // settings
  const colorModeContextData = {
    dark: {
      style: {
        backgroundColor: '#333',
        color: '#fff',
      },
      ariaLabel: 'Toggle color mode to light',
    },
    light: {
      style: {
        backgroundColor: '#eee',
        color: '#333',
      },
      ariaLabel: 'Toggle color mode to dark',
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
