import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'

function App() {

  return (
    <>
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
    </>
  )
}

function Counter(){
  const setCount = useSetRecoilState(countAtom)
  function increaseCounter(){
    setCount((count)=>count + 1);
  }

  function decreaseCounter(){
    setCount((count)=> count - 1);
  }
  return (
    <>
      <RenderCounter/>
      <button onClick={increaseCounter}>Increase counter</button><br/>
      <button onClick={decreaseCounter}>Decrease counter</button><br/>
    </>
  )
}

function RenderCounter(){
  const count = useRecoilValue(countAtom);
  
  return (
    <> 
    <h1>{count}</h1> <br/>
    <EvenCounter/>
    </>
  )
}

function EvenCounter(){
    const isEven = useRecoilValue(evenSelector);
    
      return( 
      <div>
        {isEven ? "It is even": null}
      </div>
      )
}
export default App
