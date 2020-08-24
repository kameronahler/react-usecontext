import React, { useState } from 'react'
import Component from '../Component/Component'
import 'normalize.css'
import './App.scss'

export const ThemeContext = React.createContext()

export default function App() {
  const [darkTheme, setDarkTheme] = useState(() => {
    return true
  })

  const [buttonAriaLabel, setButtonAriaLabel] = useState(() => {
    return 'Change theme to light'
  })

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <section className='grid'>
        <div className='grid__left'>
          <header>
            <h1>Toggle theme</h1>
          </header>
          <button
            aria-label={buttonAriaLabel}
            className='toggle'
            onClick={toggleTheme}
          >
            <div className='toggle__switch-wrapper'>
              <div className='toggle__switch'></div>
            </div>
          </button>
        </div>
        <Component />
      </section>
    </ThemeContext.Provider>
  )
}
