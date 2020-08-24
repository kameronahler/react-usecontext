import React from 'react'
import { ColorModeProvider } from '../_Store/ColorMode'
import 'normalize.css'
import './App.scss'
import Display from '../Display/Display'

console.log(ColorModeProvider)

export default function App() {
  return (
    <>
      <ColorModeProvider>
        <Display />
      </ColorModeProvider>
    </>
  )
}
