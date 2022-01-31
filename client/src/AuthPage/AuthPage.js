import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/context'
import { signIn, signOut } from '../api/auth'

function AuthPage() {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  
  const authContext = useContext(AuthContext)
  const credentials = {email, password}

  const loginHandler = (e) => {
    e.preventDefault()
    authContext.login()
   
    signIn(credentials)
      .then(res => console.log(res.data))
      .catch(err => console.log(`ERROR: ${err}`))
  }

  const  logoutHandler = (e) => {
    e.preventDefault()
    authContext.logout()

    // signOut()
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