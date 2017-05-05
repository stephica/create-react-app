import { createLogic } from 'redux-logic'
import { $loginWith } from './actions'
import { getActive } from '../modal/reducers'
import { hideLoginModal } from '../modal/actions'
import { userReceived } from '../actions'
import { baseUrl } from '../../../base/config'

const login = createLogic({
  type: $loginWith,
  process({ getState, action }, dispatch, done) {
    const state = getState()
    const encodedUrl = `${baseUrl}/login?email=${encodeURIComponent(action.id)}&password=${encodeURIComponent(action.password)}`
    fetch(encodedUrl, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json'
      },
      method: 'POST'
    }).then(res => {
      console.log('res:', res)
      res
        .json()
        .then(function(data) {
          dispatch(userReceived(data.passport.user))
          const isModal = getActive(state)
          if (isModal) dispatch(hideLoginModal())
          alert(data.passport.user)
        })
        .catch(err => {
          console.warn('err:', err)
        })
        .finally(done)
    })
  }
})

export default [login]
