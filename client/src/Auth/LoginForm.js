import React, { useState } from 'react'

function LoginForm() {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Hello ${email}, your password is now ${password}`)
  }

  return (  
    <form className="login" onSubmit={handleSubmit}>
      <label>
        Email: 
        <input 
          type="text"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </label>
      <label>
        Password: 
        <input 
          type="text"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default LoginForm