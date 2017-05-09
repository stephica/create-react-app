import { combineReducers } from 'redux'
import { $userReceived } from './actions'
import loginForm from './login-form/reducers'
import signupForm, { getSignupFormError as signupError } from './signup-form/reducers'
import modal from './modal/reducers'

const user = (state = {}, action) => {
  switch (action.type) {
    case $userReceived:
      return {
        ...state,
        ...action.user
      }
    default:
      return state
  }
}

export default combineReducers({
  loginForm,
  signupForm,
  user,
  modal
})

export const getSignupFormError = signupError
export const getLoginFormError = state => state.account.loginForm.error
export const isUser = state => !!state.account.user
export const isLoggedIn = state => !!Object.keys(state.account.user).length
export const getUser = state => state.account.user
