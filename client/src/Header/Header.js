import React, { useContext } from 'react'
import { AuthContext } from '../Context/context'
import { Link } from 'react-router-dom'

export default function Header() {
  const authContext = useContext(AuthContext)
  const user = authContext.user

  const unauthenticatedOptions = (
    <>
      <Link to='/sign-up'>Sign Up</Link>
      <Link to='/login'>Login</Link>
    </>
  )
  
  const authenticatedOptionsUser = (
    <>
      <Link to='/change-password'>Change Password</Link>
      <Link to='/login'>Logout</Link>
    </>
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
        <Link to="/">Home</Link>
        { user ? authenticatedOptionsUser : unauthenticatedOptions }
      </nav>
      { user ? userGreeting : ''}
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

