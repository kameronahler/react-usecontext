import React, { useContext } from 'react'
import { ThemeContext } from '../App/App'

export default function Component() {
  const darkTheme = useContext(ThemeContext)

  const exampleStyles = {
    backgroundColor: darkTheme ? '#333' : '#eee',
    color: darkTheme ? '#fff' : '#000',
  }

  return (
    <>
      <div className='grid__right'>
        <div style={exampleStyles} className='example'>
          <h2 className='example__heading'>Example</h2>
          <p className='example__body'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            odio aliquid sequi fugiat beatae expedita, dolorem sint libero quam
            amet voluptatum voluptatem corrupti in illo. Debitis fugiat hic unde
            iste.
          </p>
        </div>
      </div>
    </>
  )
}
