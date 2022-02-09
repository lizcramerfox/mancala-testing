import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/authContext'
import { changePassword } from '../api/auth'

export default function ChangePassword() {
  const [ oldPassword, setOldPassword ] = useState('')
  const [ newPassword, setNewPassword ] = useState('')
  const [ confirmChange, setConfirmChange ] = useState(false)
  
  const authContext = useContext(AuthContext)
  const passwords = {oldPassword, newPassword}
  const user = authContext.user

  const requestChangeHandler = (e) => {
    e.preventDefault()
    setConfirmChange(true)
  }

  const cancelChangeHandler = (e) => {
    e.preventDefault()
    setConfirmChange(false)
  }
  
  const confirmChangeHandler = (e) => {
    e.preventDefault()

    changePassword(passwords, user) 
      .then(setConfirmChange(false))
      .then(res => alert('Your password has been changed.'))
      .catch(err => alert(err))
    }
  
  const confirmChangeJsx = (
    <>
      <p>Are you sure you want to change your password?</p>
      <button onClick={confirmChangeHandler}>Change Password</button>
      <button onClick={cancelChangeHandler}>Cancel</button>
    </>
  )

  const submitNewPasswordJsx = (
    <input type="submit" value="Submit" />
  )

  const changePasswordFormJsx = (
    <form className="change-password" onSubmit={requestChangeHandler}>
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
      { confirmChange ? confirmChangeJsx : submitNewPasswordJsx }
    </form>
  )

  return (
    <div className='auth'>
      { user ? changePasswordFormJsx : '' }
    </div>
  )


}