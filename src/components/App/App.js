import React from 'react'
import { ColorModeContextProvider } from '../_Store/ColorMode'
import 'normalize.css'
import './App.scss'
import Toggle from '../Toggle/Toggle'
import Example from '../Example/Example'

export default function App() {
  return (
    <div className='app'>
      <ColorModeContextProvider>
        <section className='grid'>
          <div className='grid__left'>
            <Toggle />
          </div>
          <div className='grid__right'>
            <Example />
          </div>
        </section>
      </ColorModeContextProvider>
    </div>
  )
}
