import { combineReducers } from 'redux'
import loginForm from './login-form/reducers'
import signupForm, { getSignupFormError as signupError } from './signup-form/reducers'
import modal, { showLoginModal as _showLoginModal } from './modal/reducers'
import forgot from './forgot-password-form/reducers'
import reset from './reset-password-form/reducers'
import { makeActionCreator } from '../../../utils'

export const $userReceived = 'USER_RECEIVED'
export const userReceived = makeActionCreator($userReceived, 'user')

export const $logout = 'LOGOUT'
export const logout = makeActionCreator($logout)

const user = (state = {}, action) => {
  switch (action.type) {
    case $userReceived:
      return {
        ...state,
        ...action.user
      }
    case $logout:
      return {}
    default:
      return state
  }
}

export default combineReducers({
  loginForm,
  signupForm,
  user,
  forgot,
  reset,
  modal
})

const dummyWalletData = [
  {
    name: 'name 1',
    address: '0xalsdkjfaosdia98sd9f87as9d8f',
    // createdDate: newDate,
    tokenStandard: 'eth',
    tokenName: 'ether',
    tokenContract: '0xalsdkjfaosdia98sd9f87as9d8f',
    balance: '4.232534',
    wallet: '2'
  },
  {
    name: 'name 2',
    address: '0xa98s7df987a9ds8f7',
    tokenStandard: 'eth',
    tokenName: 'ether',
    tokenContract: '0x0a980ds98f0a98sd0f98asdf',
    balance: '3.98876876',
    wallet: '1'
  },
  {
    name: 'name 3',
    address: '0x987087a0sdf98707333',
    tokenStandard: 'eth',
    tokenName: 'ether',
    tokenContract: '0x098as9df098a09sd8',
    balance: '3.756578',
    wallet: '1'
  }
]
export const getSignupFormError = signupError
export const showLoginModal = _showLoginModal
// export const getUserWallets = state => state.account.user.wallets
export const getUserWallets = state => dummyWalletData
export const getLoginFormError = state => state.account.loginForm.error
export const isUser = state => !!state.account.user
export const isLoggedIn = state => !!Object.keys(state.account.user).length
export const getUser = state => state.account.user
export const getUserToken = state => localStorage.getItem('userToken')
