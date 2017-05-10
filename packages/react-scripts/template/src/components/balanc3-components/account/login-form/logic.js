import { createLogic } from 'redux-logic'
import { $loginWith, loginError } from './reducers'
import { getModalState, hideLoginModal } from '../modal/reducers'
import { userReceived } from '../reducers'
import { loginUrl } from '../../../base/config'

const login = createLogic({
  type: $loginWith,
  process({ getState, action }, dispatch, done) {
    const email = encodeURIComponent(action.id)
    const password = encodeURIComponent(action.password)
    const encodedUrl = `${loginUrl}?email=${email}&password=${password}`

    fetch(encodedUrl, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json'
      },
      method: 'POST'
    })
      .then(res => {
        if (res.status !== 200) {
          dispatch(loginError('A server error has occured'))
        } else {
          return res.json()
        }
      })
      .then(user => {
        dispatch(userReceived(user))
        const isModal = getModalState(getState())
        if (isModal) dispatch(hideLoginModal())
      })
      .then(done)
      .catch(err => dispatch(loginError('An fetching error has occured')))
  }
})

export default [login]
