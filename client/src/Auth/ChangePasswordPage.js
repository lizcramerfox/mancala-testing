import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/context'
import { changePassword } from '../api/auth'

export default function ChangePasswordPage() {
  const [ oldPassword, setOldPassword ] = useState('')
  const [ newPassword, setNewPassword ] = useState('')
  
  const authContext = useContext(AuthContext)
  const passwords = {oldPassword, newPassword}
  const user = authContext.user

  const changePasswordHandler = (e) => {
    e.preventDefault()

    changePassword(passwords, user)
      .then(res => alert('Password Changed'))
      .catch(err => alert(err))
    }

  return (
    <div className='auth'>
      {!authContext.user && (
        <h4>You must log in to change your password</h4>
      )}
      
      {authContext.user && (
        <form className="change-password" onSubmit={changePasswordHandler}>
          <label>
            Old Password: 
            <input 
              type="password"
              value={oldPassword}
              onChange={e => setOldPassword(e.target.value)}
            />
          </label>
          <label>
            New Password: 
            <input 
              type="password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )}
    </div>
  )


}