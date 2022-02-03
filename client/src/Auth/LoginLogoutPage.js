import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/context'
import { signIn, signOut } from '../api/auth'

export default function LoginLogoutPage() {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  
  const authContext = useContext(AuthContext)
  const loginCredentials = {email, password}
  const user = authContext.user

  const loginHandler = (e) => {
    e.preventDefault()
    signIn(loginCredentials)
      .then(res => authContext.login(res.data.user))
      .catch(err => console.log(`ERROR: ${err}`))
  }

  const logoutHandler = (e) => {
    e.preventDefault()
    signOut(user)
      .then(authContext.logout(user))
      .catch(err => console.log(`ERROR: ${err}`))
  }

  const loginJsx = (
    <form className="login" onSubmit={loginHandler}>
      <label>
        Email: 
        <input 
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password: 
        <input 
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )

  const logoutJsx = (
    <form className="logout" onSubmit={logoutHandler}>
      <input type="submit" value="Logout" />
    </form>
  )

  return (
    <div className='auth'>
      { authContext.user ? logoutJsx : loginJsx }
    </div>
  )
}