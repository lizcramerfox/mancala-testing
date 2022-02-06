import React, { useContext } from 'react'
import { AuthContext } from '../Context/context'
import { NavLink } from 'react-router-dom'

export default function HeaderAuth() {
  const authContext = useContext(AuthContext)
  const user = authContext.user

  const unauthenticatedOptions = (
    <>
      <NavLink to='/sign-up'>Sign Up</NavLink>
      <NavLink to='/login'>Login</NavLink>
    </>
  )
  
  const authenticatedOptionsUser = (
    <>
      <NavLink to='/change-password'>Change Password</NavLink>
      <NavLink to='/logout'>Logout</NavLink>
    </>
  )

  return (
    <>
      { user ? authenticatedOptionsUser : unauthenticatedOptions }
    </>
  )
}

