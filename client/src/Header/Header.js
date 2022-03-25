import React, { useContext } from 'react'
import { AuthContext } from '../Context/context'
import { NavLink, useNavigate } from 'react-router-dom'
import { signOut } from '../api/auth'

export default function Header() {
  const authContext = useContext(AuthContext)
  const user = authContext.user
  const navigate = useNavigate()

  const activeClassName = ({isActive}) => isActive ? 'active-style' : 'none'

  const logoutHandler = (e) => {
    e.preventDefault()
    signOut(user)
      .then(authContext.logout(user))
      .then(navigate('/'))
      .catch(err => console.log(`ERROR: ${err}`))
  }

  const unauthenticatedOptions = (
    <>
      <NavLink to='/auth/sign-up' className={activeClassName}>Sign Up</NavLink>
      <NavLink to='/auth/login' className={activeClassName}>Login</NavLink>
    </>
  )
  
  const authenticatedOptionsUser = (
    <>
      <NavLink to='/auth/change-password' className={activeClassName}>Change Password</NavLink>
      <button onClick={logoutHandler}>Logout</button>
    </>
  )

  const gameOptions = (
    <div className='games'>
      <NavLink to='/games' className={activeClassName}>Games</NavLink>
    </div>
  )

  const userGreeting = (
    <div className='user-greeting'>
      <h4>Signed in as: <span className='username'>{user.email}</span></h4>
    </div>
  )

  return (
    <header>
      <h1>Mancala</h1>
      <nav className='game-nav'>
        <NavLink to='/' className={activeClassName}>Home</NavLink>
        { user ? gameOptions : '' }
      </nav>
      <div className='auth-nav'>
        { user ? userGreeting : '' }
        <nav>
          { user ? authenticatedOptionsUser : unauthenticatedOptions }
        </nav>
      </div>
    </header>
  )
}

