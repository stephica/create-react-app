import { makeActionCreator } from '../../../../utils'

export const $postForgotPassword = 'POST_FORGOT_PASSWORD'
export const postResetPassword = makeActionCreator($postForgotPassword, 'email')

// export const $resetPasswordError = 'RESET_PASSWORD_ERROR'
// export const signupError = makeActionCreator($resetPasswordError, 'error')

export default (state = {}, action) => {
  switch (action.type) {
    case $postForgotPassword:
      return {
        ...state,
        posted: true
      }
    // case $resetPasswordError:
    //   return {
    //     ...state,
    //     error: action.error,
    //     loading: false
    //   }
    default:
      return state
  }
}

// export const getResetPasswordError = state => state.account.resetPassword.error
