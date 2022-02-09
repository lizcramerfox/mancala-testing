import React, { useContext } from 'react'
import { AuthContext } from '../Context/authContext'
import { signOut } from '../api/auth'

export default function Logout() {
  const authContext = useContext(AuthContext)
  const user = authContext.user

  const logoutHandler = (e) => {
    e.preventDefault()
    signOut(user)
      .then(authContext.logout(user))
      .catch(err => console.log(`ERROR: ${err}`))
  }

  const logoutJsx = (
    <form className="logout" onSubmit={logoutHandler}>
      <input type="submit" value="Logout" />
    </form>
  )

  return (
    <div className='auth'>
      { authContext.user ? logoutJsx : '' }
    </div>
  )
}