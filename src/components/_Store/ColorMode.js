import React, { useState } from 'react'

export const ColorModeContext = React.createContext()
export const ToggleColorModeContext = React.createContext()

export function ColorModeProvider({ children }) {
  const [darkColorModeStatus, setDarkColorModeStatus] = useState(() => {
    return true
  })

  const toggleDarkColorModeStatus = () => {
    setDarkColorModeStatus(
      (prevDarkColorModeStatus) => !prevDarkColorModeStatus
    )
  }

  // const [buttonAriaLabel, setButtonAriaLabel] = useState(() => {
  //   return 'Change theme to light'
  // })
  console.log(darkColorModeStatus)
  return (
    <>
      <ColorModeContext.Provider value={darkColorModeStatus}>
        <ToggleColorModeContext.Provider value={toggleDarkColorModeStatus}>
          {children}
        </ToggleColorModeContext.Provider>
      </ColorModeContext.Provider>
    </>
  )
}
