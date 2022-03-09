import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/context'
import { signIn } from '../api/auth'

export default function Login() {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  
  const authContext = useContext(AuthContext)
  const navigate = useNavigate()

  let loginCredentials 

  if (window.location.hostname === "localhost") {
    loginCredentials = { email: 'a@a', password: 'a' }
  } else {
    loginCredentials = { email, password }
  }

  const loginHandler = (e) => {
    e.preventDefault()

    signIn(loginCredentials)
      .then(res => authContext.login(res.data.user, res.data.user.token))
      .then(navigate('/games'))
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

  return (
    <div className='auth'>
      { !authContext.user ? loginJsx : '' }
    </div>
  )
}