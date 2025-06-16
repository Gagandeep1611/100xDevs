import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
  //tailwind is mobile first.
  return (
    <div>
      <div className='grid grid-cols-3'>
        <RevenueCard title={"Bank Balance"} amount={"91,425.05"} orderCount={13}/>
      </div>
    </div>
  )
}

export default App
