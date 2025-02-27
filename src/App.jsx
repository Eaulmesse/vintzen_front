import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Features from './components/Features/Features'
import Pricing from './components/Pricing/Pricing'
import Opinions from './components/Opinions/Opinions'
import Faq from './components/Faq/Faq'
import News from './components/News/News'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <div className='App'>
      <Navbar/>
      <Header/>
      <Features/>
      <Opinions/>
      <Pricing/>
      <Faq/>
      {/* <News/> */}
      {/* <Footer/> */}
    </div>
  )
}

export default App
