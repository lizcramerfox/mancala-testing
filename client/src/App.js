import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.scss'
import { AuthContext } from './Context/context'
import SignUpPage from './Auth/SignUpPage'
import LoginLogoutPage from './Auth/LoginLogoutPage'
import ChangePasswordPage from './Auth/ChangePasswordPage'
import Header from './Header/Header'
import Home from './Home/Home'


function App() {
  const [ user, setUser ] = useState('')

  const login = (user) => {
    setUser(user)
  }

  const logout = (user) => {
    setUser('')
  }

  return (
    <div>
      <AuthContext.Provider
        value={{
          user: user,
          login: login,
          logout: logout
        }}
      >
        <Header />
        <Routes>
          <Route path="/sign-up" element={ <SignUpPage /> } />
          <Route path="/login" element={ <LoginLogoutPage /> } />
          <Route path="/change-password" element={ <ChangePasswordPage /> }/>
        </Routes>
        <Home />
      </AuthContext.Provider>
    </div>
  )
}

export default App