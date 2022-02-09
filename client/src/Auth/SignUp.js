import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/authContext'
import { signUp, signIn } from '../api/auth'

export default function SignUp() {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ passwordConfirmation, setPasswordConfirmation ] = useState('')

  const authContext = useContext(AuthContext)
  const signUpCredentials = {email, password, passwordConfirmation}
  const loginCredentials = {email, password}
  const user = authContext.user

  const signUpHandler = (e) => {
    e.preventDefault()
   
    signUp(signUpCredentials)
      .then(alert(`Account created for ${email}`))
      .catch(err => console.log(`ERROR: ${err}`))
    
    signIn(loginCredentials)
      .then(res => authContext.login(res.data.user))
      .catch(err => console.log(`ERROR: ${err}`))
  }

  return (  
    <div className="auth">
      {!authContext.user && (
        <form className="sign-up" onSubmit={signUpHandler}>
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
          <label>
            Confirm Password: 
            <input 
              type="password"
              value={passwordConfirmation}
              onChange={e => setPasswordConfirmation(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )}
      
      {authContext.user && (
        <div className="user-info">
          <h4>Logged in as: {user.email}</h4>
        </div>
      )}
    </div>
  )
}