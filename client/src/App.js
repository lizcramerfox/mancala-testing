import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.scss'
import { AuthContext } from './Context/context'
import SignUp from './Auth/SignUp'
import LoginLogout from './Auth/LoginLogout'
import ChangePassword from './Auth/ChangePassword'
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
          <Route path="/sign-up" element={ <SignUp /> } />
          <Route path="/login" element={ <LoginLogout /> } />
          <Route path="/change-password" element={ <ChangePassword /> }/>
        </Routes>
        <Home />
      </AuthContext.Provider>
    </div>
  )
}

export default App