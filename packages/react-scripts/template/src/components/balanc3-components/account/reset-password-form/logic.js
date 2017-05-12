import { createLogic } from 'redux-logic'
import { $postResetPassword, resetPasswordSuccess, resetPasswordError } from './reducers'
import { baseUrl } from '../../../base/config'

const resetPassword = createLogic({
  type: $postResetPassword,
  process({ getState, action }, dispatch, done) {
    console.log('postResetPassword logic:', action)
    const token = action.token || window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
    const resetUrl = `${baseUrl}/reset/${token}?password=${action.newPassword}`
    fetch(resetUrl, { method: 'POST' })
      .then(res => res.json())
      .then(res => {
        if (!res.err) {
          console.log('reset res:', res)
          localStorage.setItem('userToken', res.token)
          dispatch(resetPasswordSuccess())
        } else {
          dispatch(resetPasswordError(res.err))
        }
        done()
      })
      .catch(err => {
        dispatch(resetPasswordError('Connectivity error occured'))
        done()
      })
  }
})

export default [resetPassword]
