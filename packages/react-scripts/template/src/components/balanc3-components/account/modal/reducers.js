import { $showLoginModal, $hideLoginModal } from './actions'

export default (state = {}, action) => {
  switch (action.type) {
    case $showLoginModal:
      return {
        ...state,
        activeState: action.activeState || 'login'
      }
    case $hideLoginModal:
      return {
        ...state,
        activeState: false
      }
    default:
      return state
  }
}

export const getModalState = state => state.account.modal.activeState || null
