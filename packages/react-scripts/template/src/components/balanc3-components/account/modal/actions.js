import { makeActionCreator } from '../../../../utils'

export const $showLoginModal = 'SHOW_LOGIN_MODAL'
export const showLoginModal = makeActionCreator($showLoginModal, 'activeState')

export const $hideLoginModal = 'HIDE_LOGIN_MODAL'
export const hideLoginModal = makeActionCreator($hideLoginModal)
