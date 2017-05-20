import { makeActionCreator } from '../../../utils'

export const $showWalletModal = 'SHOW_WALLET_MODAL'
export const showWalletModal = makeActionCreator($showWalletModal, 'wallet')

export const $hideWalletModal = 'HIDE_WALLET_MODAL'
export const hideWalletModal = makeActionCreator($hideWalletModal)

export default (state = {}, action) => {
  switch (action.type) {
    case $showWalletModal:
      return {
        ...state,
        activeState: true,
        walletInfo: action.wallet
      }
    case $hideWalletModal:
      return {
        ...state,
        activeState: false
      }
    default:
      return state
  }
}

export const getModalState = state => state.walletModal.activeState || null
export const getWalletInfo = state => state.walletModal.walletInfo || null
