import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Features from './components/Features/Features'
import Pricing from './components/Pricing/Pricing'

function App() {
  

  return (
    <>
      <Navbar/>
      <Header/>
      <Features/>
      <Pricing/>
    </>
  )
}

export default App
