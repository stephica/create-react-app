import { makeActionCreator } from '../../utils'

export const $getBySender = 'GET_BY_SENDER'
export const getBySender = makeActionCreator($getBySender, 'sender')
