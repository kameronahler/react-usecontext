import React, { useState } from 'react'
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

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <section className='grid'>
          <div className='grid__left'>
            <header>
              <h1>Toggle theme</h1>
            </header>
            <button aria-label={buttonAriaLabel} className='toggle'>
              <div className='toggle__switch-wrapper'>
                <div className='toggle__switch'></div>
              </div>
            </button>
          </div>
          <div className='grid__right'>
            <div className='example'>
              <h2 className='example__heading'>Example</h2>
              <p className='example__body'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi odio aliquid sequi fugiat beatae expedita, dolorem
                sint libero quam amet voluptatum voluptatem corrupti in illo.
                Debitis fugiat hic unde iste.
              </p>
            </div>
          </div>
        </section>
      </ThemeContext.Provider>
    </>
  )
}
