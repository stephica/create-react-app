import { createLogic } from 'redux-logic'
import { $loginWith, loginError } from './actions'
import { getModalState } from '../modal/reducers'
import { hideLoginModal } from '../modal/actions'
import { userReceived } from '../actions'
import { loginUrl } from '../../../base/config'

const login = createLogic({
  type: $loginWith,
  process({ getState, action }, dispatch, done) {
    const state = getState()
    const body = {
      username: action.id,
      password: action.password
    }
    // const encodedUrl = `${baseUrl}/login?email=${encodeURIComponent(action.id)}&password=${encodeURIComponent(action.password)}`
    fetch(loginUrl, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(body)
    })
      .then(res => {
        console.log('res:', res)
        if (res.status !== 200) {
          dispatch(loginError('A server error has occured'))
        } else {
          res
            .json()
            .then(function(data) {
              dispatch(userReceived(data.passport.user))
              const isModal = getModalState(state)
              if (isModal) dispatch(hideLoginModal())
            })
            .then(done)
        }
      })
      .catch(err => dispatch(loginError('An fetch error has occured')))
      .then(done)
  }
})

export default [login]
