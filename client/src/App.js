import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.scss'
import LoginForm from './Auth/LoginForm'
import Header from './Header/Header'
import Main from './Main/Main'
import Home from './Home/Home'


function App() {
  return (
    <div>
      <Header />
    
      <Routes>
        <Route path="/main" element={ <Main /> } />
        <Route path="/login" element={ <LoginForm /> } />
      </Routes>

      <Home />
    </div>
  )
}

export default App