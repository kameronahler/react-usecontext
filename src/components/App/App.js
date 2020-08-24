import React from 'react'
import { ColorModeContextProvider } from '../_Store/ColorMode'
import 'normalize.css'
import './App.scss'
import Display from '../Display/Display'

export default function App() {
  return (
    <>
      <ColorModeContextProvider>
        <Display />
      </ColorModeContextProvider>
    </>
  )
}
