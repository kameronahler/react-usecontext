import React, { useContext } from 'react'
import { ColorModeContext, ToggleColorModeContext } from '../_Store/ColorMode'
import './Toggle.scss'

export default function Toggle() {
  // consume and destructure from provider
  const [colorModeConsumer, colorModeDataConsumer] = useContext(
    ColorModeContext
  )

  // reach back up to context to change global context's state
  const ToggleColorModeContextStateConsumer = useContext(ToggleColorModeContext)

  // conditionally use an aria label from the data in the context provider
  const printAriaLabel = colorModeConsumer
    ? colorModeDataConsumer.dark.ariaLabel
    : colorModeDataConsumer.light.ariaLabel

  return (
    <div className='toggle'>
      <div className='toggle__inner'>
        <header className='toggle__header'>
          <h1 className='toggle__heading'>Toggle Color Mode</h1>
        </header>
        <button
          aria-label={printAriaLabel}
          className='toggle__button'
          onClick={ToggleColorModeContextStateConsumer}
        >
          <div className='toggle__switch-wrapper'>
            <div
              style={
                !colorModeConsumer ? { transform: 'translateX(150%)' } : {}
              }
              className='toggle__switch'
            ></div>
          </div>
        </button>
      </div>
    </div>
  )
}
