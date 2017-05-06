import { combineReducers } from 'redux'
import { $userReceived } from './actions'
import loginForm from './login-form/reducers'
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
  user,
  modal
})

export const getLoginFormError = state => state.account.loginForm.error
export const isUser = state => !!state.account.user
export const getUser = state => state.account.user
