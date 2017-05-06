import { makeActionCreator } from '../../../utils'

export const $userReceived = 'USER_RECEIVED'
export const userReceived = makeActionCreator($userReceived, 'user')
