import React, { useState } from 'react'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import './App.css'
import UseContextDemo from './UseContextDemo';
import { CountContext } from './components/context';

const Dashboard = React.lazy(() => import("./components/Dashboard"))
const Landing = React.lazy(() => import("./components/Landing"));
function App() {
  let n =25;

  return (
    <div>
      <CountContext.Provider value={n}>
        <UseContextDemo/>
      </CountContext.Provider>
    <BrowserRouter>
      <Appbar/>
      <Routes>
          <Route path="/dashboard" element ={<Dashboard/>}/>
          <Route path="/" element ={<Landing/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();
  return (
  <div style={{background: "red"}}> {/* stays constant throughout the whole application.  */}
        <button onClick={()=>{navigate("/");}}>Landing page</button> 
        <button onClick={()=>{navigate("/dashboard");}}>Dashboard</button>
  </div>
  )
}
export default App
