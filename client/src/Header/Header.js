import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ user }) => (
  <header>
    <h1>Mancala</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/sign-up">Sign Up</Link>
      <Link to="/login">Login</Link>
      <Link to="/change-password">Change Password</Link>
      <Link to="/main">Main Page</Link>
    </nav>
  </header>
)

// const authenticatedOptionsUser = (
//   <Fragment>
//     <a href="#change-password">Change Password</a>
//     <a href="#sign-out">Sign Out</a>
//   </Fragment>
// )

// const authenticatedOptionsGame = (
//   <Fragment>
//     <a href="#games-create">Start New Game</a>
//     <a href="#games">View Saved Games</a>
//     <a href="#home">Home</a>
//   </Fragment>
// )

// const unauthenticatedOptions = (
//   <Fragment>
//     <a href="#sign-up">Sign Up</a>
//     <a href="#sign-in">Sign In</a>
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

export default Header
