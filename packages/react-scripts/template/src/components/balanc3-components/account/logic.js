import { createLogic } from 'redux-logic'
import { getUserToken } from '../account/reducers'
import { $userReceived, $logout } from './reducers'
import { baseUrl } from '../../base/config'
export const isValidPassword = string => !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i.test(string)
export const isValidEmail = string => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(string)

const tokenStore = createLogic({
  type: $userReceived,
  process({ getState, action }, dispatch, done) {
    const userToken = getUserToken(getState())
    localStorage.setItem('userToken', userToken)
  }
})

const logout = createLogic({
  type: $logout,
  process({ getState, action }, dispatch, done) {
    const encodedUrl = `${baseUrl}/logout?token=${getUserToken(getState())}`
    fetch(encodedUrl, { method: 'POST' })
  }
})

export default [tokenStore, logout]
