import React, { useContext } from 'react'
import { AuthContext } from '../Context/context'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const authContext = useContext(AuthContext)
  const user = authContext.user

  const activeClassName = ({isActive}) => isActive ? 'active-style' : 'none'

  const unauthenticatedOptions = (
    <>
      <NavLink to='/auth/sign-up' className={activeClassName}>Sign Up</NavLink>
      <NavLink to='/auth/login' className={activeClassName}>Login</NavLink>
    </>
  )
  
  const authenticatedOptionsUser = (
    <>
      <NavLink to='/auth/change-password' className={activeClassName}>Change Password</NavLink>
      <NavLink to='/auth/logout' className={activeClassName}>Logout</NavLink >
    </>
  )

  const gameOptions = (
    <div className='games'>
      <NavLink to='/games' className={activeClassName}>Games</NavLink>
    </div>
  )

  const userGreeting = (
    <>
      <h4>Welcome, {user.email}</h4>
    </>
  )

  return (
    <header>
      <h1>Mancala</h1>
      <nav>
        <NavLink to='/' className={activeClassName}>Home</NavLink>
        { user ? authenticatedOptionsUser : unauthenticatedOptions }
        { user ? gameOptions : '' }
      </nav>
      { user ? userGreeting : '' }
    </header>
  )
}


// const authenticatedOptionsGame = (
//   <Fragment>
//     <a href="#games-create">Start New Game</a>
//     <a href="#games">View Saved Games</a>
//     <a href="#home">Home</a>
//   </Fragment>
// )



// const Header = ({ user }) => (
//   <header>
//     <div className="title-block">
//       <h1>Mancala</h1>
//     </div>
//     <div className="user-welcome"> { user ? <p> Welcome, {user.email} </p> : ''} </div>
//     <nav>
//       <div className="auth-links"> { user ? authenticatedOptionsUser : unauthenticatedOptions } </div>
//       <div className="game-links"> { user ? authenticatedOptionsGame : '' } </div>
//       <div className="auth-modal"></div>
//     </nav>
//   </header>
// )

