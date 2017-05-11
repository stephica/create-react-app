import { createLogic } from 'redux-logic'
import { $postForgotPassword } from './reducers'
import { baseUrl } from '../../../base/config'

const ForgotPassword = createLogic({
  type: $postForgotPassword,
  process({ getState, action }, dispatch, done) {
    console.log('postForgotPassword logic:', action)
    fetch(baseUrl)
    done()
  }
})

export default [ForgotPassword]
