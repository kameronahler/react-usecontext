import React, { useContext } from 'react'
import { ColorModeContext, ToggleColorModeContext } from '../_Store/ColorMode'

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
      <header className='toggle__header'>
        <h1 className='controls__heading'>Toggle theme</h1>
      </header>
      <button
        aria-label={printAriaLabel}
        className='toggle__button'
        onClick={ToggleColorModeContextStateConsumer}
      >
        <div className='toggle__switch-wrapper'>
          <div className='toggle__switch'></div>
        </div>
      </button>
    </div>
  )
}
