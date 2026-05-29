import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import LoginPage from './components/Login'
import Signup from './components/SignUp'
import Home from './components/Home'
import AuthProvider from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
