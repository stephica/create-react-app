import { makeActionCreator } from '../../../../utils'

export const $loginWith = 'LOGIN_WITH'
export const loginWith = makeActionCreator($loginWith, 'id', 'password')
