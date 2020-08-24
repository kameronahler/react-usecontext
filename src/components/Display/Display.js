import React, { useContext } from 'react'
import { ColorModeContext, ToggleColorModeContext } from '../_Store/ColorMode'

export default function Display() {
  // consume from provider
  const [colorModeConsumer, colorModeDataConsumer] = useContext(
    ColorModeContext
  )

  // reach back up to context to change global context's state
  const ToggleColorModeContextStateConsumer = useContext(ToggleColorModeContext)

  // conditionally use certain styles from consumer data
  const currentStyles = colorModeConsumer
    ? colorModeDataConsumer.dark
    : colorModeDataConsumer.light

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
            onClick={ToggleColorModeContextStateConsumer}
          >
            <div className='toggle__switch-wrapper'>
              <div className='toggle__switch'></div>
            </div>
          </button>
        </div>
        <div className='grid__right'>
          <div style={currentStyles} className='example'>
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
