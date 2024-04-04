import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Welcome from './components/Openbox/Welcome'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route path="/openbox" element={<Welcome />} />
      </Routes>
    </>
  )
}

export default App
