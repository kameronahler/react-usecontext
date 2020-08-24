import React, { useState } from 'react'
import './App.scss'

export const ThemeContext = React.createContext()

export default function App() {
  const [darkTheme, setDarkTheme] = useState(() => {
    return true
  })

  const [buttonAriaLabel, setButtonAriaLabel] = useState(() => {
    return 'Change theme to light'
  })

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <header>
          <h2>Toggle theme</h2>
        </header>
        <button aria-label={buttonAriaLabel} className='button'>
          <span
            aria-hidden='true'
            className='button__label button__label--dark'
          >
            {darkTheme ? 'Dark mode' : 'Light mode'}
          </span>
          <div className='button__toggle-wrapper'>
            <div
              className={`button__indicator
                ${
                  darkTheme
                    ? 'button__indicator--dark'
                    : 'button__indicator--light'
                }`}
            ></div>
          </div>
        </button>
        <h1>Hello world</h1>
      </ThemeContext.Provider>
    </>
  )
}
