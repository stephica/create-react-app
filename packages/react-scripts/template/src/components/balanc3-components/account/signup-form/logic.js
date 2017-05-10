import { createLogic } from 'redux-logic'
import { $postSignup, signupError } from './reducers'
import { getModalState, hideLoginModal } from '../modal/reducers'
import { userReceived } from '../actions'
import { baseUrl } from '../../../base/config'

const signup = createLogic({
  type: $postSignup,
  process({ getState, action }, dispatch, done) {
    console.log('signup post init:', action)
    const username = encodeURIComponent(action.email)
    const password = encodeURIComponent(action.password)
    const encodedUrl = `${baseUrl}/signup?username=${username}&password=${password}`

    fetch(encodedUrl, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json'
      },
      method: 'POST'
    })
      .then(res => res.json())
      .then(res => {
        if (res.err) {
          dispatch(signupError(res.err))
        } else {
          dispatch(userReceived(res))
          const isModal = getModalState(getState())
          if (isModal) dispatch(hideLoginModal())
        }
      })
      .then(done)
      .catch(err => dispatch(signupError('An fetching error has occured')))
  }
})

export default [signup]
