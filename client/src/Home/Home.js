import React, { useContext } from 'react'
import { AuthContext } from '../Context/context'
import { useNavigate, Link } from 'react-router-dom'

export default function Home() {
  const authContext = useContext(AuthContext)
  const user = authContext.user
  const navigate = useNavigate()

  const unauthenticatedHome = (
    <>
      <h2>Welcome!</h2>
      <h3>Please <Link to='/auth/sign-up'>Sign Up</Link> or <Link to='/auth/login'>Log In</Link> to Play</h3>
    </>
  )

  const viewGamesHandler = (e) => {
    e.preventDefault()
    navigate('/games')
  }

  const authenticatedHome = (
    <>
      <button className='button-homepage' onClick={viewGamesHandler}>
        Saved Games
      </button>
    </>
  )

  return (
    <div className='home page-wrapper'>
      { user ? authenticatedHome : unauthenticatedHome}
    </div>
  )
}