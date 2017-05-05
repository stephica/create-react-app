import { $loginError, $loginWith } from './actions'

export default (state = {}, action) => {
  switch (action.type) {
    case $loginError:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case $loginWith:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export const getError = state => state.account.loginForm.error
export const isLoading = state => state.account.loginForm.loading
