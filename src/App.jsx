import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Features from './components/Features/Features'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Features></Features>
    </>
  )
}

export default App
