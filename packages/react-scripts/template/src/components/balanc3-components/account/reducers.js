import { $userReceived } from './actions'

export default (state = {}, action) => {
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
