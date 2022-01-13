import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import './header.module.scss'

const authenticatedOptionsUser = (
  <Fragment>
    <a href="#change-password">Change Password</a>
    <a href="#sign-out">Sign Out</a>
  </Fragment>
)

const authenticatedOptionsGame = (
  <Fragment>
    <a href="#games-create">Start New Game</a>
    <a href="#games">View Saved Games</a>
    <a href="#">Home</a>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <a href="#sign-up">Sign Up</a>
    <a href="#sign-in">Sign In</a>
  </Fragment>
)


const Header = ({ user }) => (
  <header>
    <div className="title-block">
      <h1>Mancala</h1>
    </div>
    <div className="user-welcome"> { user ? <p> Welcome, {user.email} </p> : ''} </div>
    <nav>
      <div className="auth-links"> { user ? authenticatedOptionsUser : unauthenticatedOptions } </div>
      <div className="game-links"> { user ? authenticatedOptionsGame : '' } </div>
      <div className="auth-modal"></div>
    </nav>
  </header>
)

export default withRouter(Header)
