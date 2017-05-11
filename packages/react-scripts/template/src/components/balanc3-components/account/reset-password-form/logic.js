import { createLogic } from 'redux-logic'
import { $postResetPassword } from './reducers'
import { baseUrl } from '../../../base/config'

const resetPassword = createLogic({
  type: $postResetPassword,
  process({ getState, action }, dispatch, done) {
    console.log('postResetPassword logic:', action)
    fetch(baseUrl)
  }
})

export default [resetPassword]
