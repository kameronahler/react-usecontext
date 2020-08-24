import React, { useContext } from 'react'
import { ColorModeContext } from '../_Store/ColorMode'
import Toggle from '../Toggle/Toggle'

export default function Display() {
  // consume and destructure from provider
  const [colorModeConsumer, colorModeDataConsumer] = useContext(
    ColorModeContext
  )

  // conditionally use styles from the data in the context provider
  const printStyles = colorModeConsumer
    ? colorModeDataConsumer.dark.style
    : colorModeDataConsumer.light.style

  return (
    <>
      <section className='grid'>
        <div className='grid__left'>
          <Toggle />
        </div>
        <div className='grid__right'>
          <div style={printStyles} className='example'>
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
