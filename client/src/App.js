import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.scss'
import { AuthContext } from './Context/context'
import AuthPage from './AuthPage/AuthPage'
import Header from './Header/Header'
import Home from './Home/Home'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = () => {
    setIsLoggedIn(true)
  }

  const logout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div>
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          login: login,
          logout: logout
        }}
      >
        <Header />
        <Routes>
          <Route path="/login" element={ <AuthPage /> } />
        </Routes>
        <Home />
      </AuthContext.Provider>
      
    </div>
  )
}

export default App