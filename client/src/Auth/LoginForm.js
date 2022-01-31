import React, { useState } from 'react'
import { signIn } from '../api/auth'

function LoginForm() {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // alert(`Hello ${email}, your password is now ${password}`)
    signIn(email, password)
      // .then(res => console.log(res))
  }

  return (  
    <form className="login" onSubmit={handleSubmit}>
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
  )
}

export default LoginForm