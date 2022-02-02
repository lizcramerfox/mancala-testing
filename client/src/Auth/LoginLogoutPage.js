import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/context'
import { signIn, signOut } from '../api/auth'

function LoginLogoutPage() {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  
  const authContext = useContext(AuthContext)
  const credentials = {email, password}
  const user = authContext.user

  const loginHandler = (e) => {
    e.preventDefault()
   
    signIn(credentials)
      .then(res => authContext.login(res.data.user))
      .catch(err => console.log(`ERROR: ${err}`))
  }

  const logoutHandler = (e) => {
    e.preventDefault()
    signOut(user)
      .then(authContext.logout(user))
      .catch(err => console.log(`ERROR: ${err}`))
  }

  console.log(authContext)

  return (  
    <div className="auth">
      {!authContext.isLoggedIn && (
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
              type="text"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )}
      
      {authContext.isLoggedIn && (
        <div className="user-info">
          <h4>Logged in as: {user.email}</h4>
          <form className="logout" onSubmit={logoutHandler}>
            <input type="submit" value="Logout" />
          </form>
        </div>
      )}
    </div>
  )
}

export default LoginLogoutPage