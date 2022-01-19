import React from 'react'

function Auth() {
  return (
    <div className="auth">
      <form>
        <label>Email: 
          <input name="email" type="text" />
        </label>
        <label>Password: 
          <input name="password" type="text" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Auth