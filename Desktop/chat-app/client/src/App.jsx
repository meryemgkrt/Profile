import React from 'react'
import logo from "./img/logo2.jpg"
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <header >
    <Outlet />
    </header>
  )
}

export default App

