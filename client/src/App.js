import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.scss'
import { AuthContext } from './Context/context'
import SignUp from './Auth/SignUp'
import Login from './Auth/Login'
import Logout from './Auth/Logout'
import ChangePassword from './Auth/ChangePassword'
import Header from './Header/Header'

function App() {
  const [ user, setUser ] = useState('')

  const login = (user) => {
    setUser(user)
  }

  const logout = (user) => {
    setUser('')
  }

  const authRoutes = (
    <>
      <Route path="/auth/sign-up" element={ <SignUp /> } />
      <Route path="/auth/login" element={ <Login /> } />
      <Route path="/auth/logout" element={ <Logout /> } />
      <Route path="/auth/change-password" element={ <ChangePassword /> }/>
    </>
  )
  

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
          {authRoutes}
        </Routes>

      </AuthContext.Provider>
    </div>
  )
}

export default App