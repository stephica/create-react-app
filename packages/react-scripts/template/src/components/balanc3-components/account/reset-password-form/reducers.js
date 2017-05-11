import { makeActionCreator } from '../../../../utils'

export const $postResetPassword = 'POST_RESET_PASSWORD'
export const postResetPassword = makeActionCreator($postResetPassword, 'password', 'token')

export const $resetPasswordError = 'RESET_PASSWORD_ERROR'
export const signupError = makeActionCreator($resetPasswordError, 'error')

export default (state = {}, action) => {
  switch (action.type) {
    case $postResetPassword:
      return {
        ...state,
        loading: true
      }
    case $resetPasswordError:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    default:
      return state
  }
}

export const getResetPasswordError = state => state.account.resetPassword.error
