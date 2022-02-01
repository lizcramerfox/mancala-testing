import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../Context/context'
import { signIn, signOut } from '../api/auth'

function AuthPage() {
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

  // START HERE - NOT UPDATING 'isLoggedIn' or 'user' on logout (but is logging out from API)?
  const logoutHandler = (e) => {
    e.preventDefault()
    signOut(user)
      .then(authContext.logout(user))
      .catch(err => console.log(`ERROR: ${err}`))
    console.log(authContext)
  }


  return (  
    <>
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
        <form className="logout" onSubmit={logoutHandler}>
          <input type="submit" value="Logout" />
        </form>
      )}
    </>
  )
}

export default AuthPage