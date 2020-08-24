import React, { useContext } from 'react'
import { ColorModeContext, ToggleColorModeContext } from '../_Store/ColorMode'

export default function Component() {
  const darkColorModeStatus = useContext(ColorModeContext)
  const toggleDarkColorModeStatus = useContext(ToggleColorModeContext)

  // const exampleStyles = {
  //   backgroundColor: darkColorMode ? '#333' : '#eee',
  //   color: darkColorMode ? '#fff' : '#000',
  // }

  return (
    <>
      <section className='grid'>
        <div className='grid__left'>
          <header>
            <h1>Toggle theme</h1>
          </header>
          <button
            // aria-label={buttonAriaLabel}
            className='toggle'
            onClick={toggleDarkColorModeStatus}
          >
            <div className='toggle__switch-wrapper'>
              <div className='toggle__switch'></div>
            </div>
          </button>
        </div>
        <div className='grid__right'>
          {/* <div style={exampleStyles} className='example'> */}
          <div className='example'>
            <h2 className='example__heading'>Example</h2>
            <p className='example__body'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi odio aliquid sequi fugiat beatae expedita, dolorem sint
              libero quam amet voluptatum voluptatem corrupti in illo. Debitis
              fugiat hic unde iste.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
