import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { changePassword } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

class ChangePassword extends Component {
  constructor () {
    super()

    this.state = {
      oldPassword: '',
      newPassword: '',
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  goBack = () => {
    this.props.history.goBack()
  }

  onChangePassword = event => {
    event.preventDefault()

    const { msgAlert, history, user } = this.props

    changePassword(this.state, user)
      .then(() => msgAlert({
        heading: 'Success',
        message: messages.changePasswordSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ oldPassword: '', newPassword: '' })
        msgAlert({
          heading: 'Failed',
          message: messages.changePasswordFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { oldPassword, newPassword } = this.state

    return (
      <div className="auth">
        <div className="title">
          <h3>Change Password</h3>
        </div>
        <form onSubmit={this.onChangePassword}>
          <div className="form-element">
            <label className="form-label">Old password</label>
            <input
              className="text-input"
              required={true}
              type="password"
              name="oldPassword"
              id="oldPassword"
              value={oldPassword}
              placeholder="Old Password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-element">
            <label className="form-label">New Password</label>
            <input
              className="text-input"
              required={true}
              type="password"
              name="newPassword"
              id="newPassword"
              value={newPassword}
              placeholder="New Password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-element form-button">
            <input
              className="button"
              onClick={this.goBack}
              type="submit"
              value="Cancel"
            />
            <input
              className="button"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(ChangePassword)
