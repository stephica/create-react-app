import { combineReducers } from 'redux'
import { $userReceived } from './actions'
import loginForm from './login-form/reducers'
import modal from './modal/reducers'

const user = (state = {}, action) => {
  switch (action.type) {
    case $userReceived:
      return {
        ...state,
        passportToken: action.passportToken
      }
    default:
      return state
  }
}

export const getPassportToken = state => state.account.passportToken || null

export default combineReducers({
  loginForm,
  user,
  modal
})

export const getLoginFormError = state => state.account.loginForm.error
