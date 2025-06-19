import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Content from './components/Content'

function App() {

  return (
    <div className='bg-[#121212] w-screen h-screen flex-col flex-auto'>
      <Navigation/>
      <Content/>
    </div>
  )
}

export default App
