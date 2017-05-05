import { createLogic } from 'redux-logic'
import { $loginWith } from './actions'
import { baseUrl } from '../../base/config'

const login = createLogic({
  type: $loginWith,
  process({ getState, action }, dispatch, done) {
    const encodedUrl = `${baseUrl}/login?username=${encodeURIComponent(action.id)}&password=${encodeURIComponent(action.password)}`
    fetch(encodedUrl, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json'
      },
      mode: 'no-cors',
      method: 'POST'
    }).then(res => {
      res.json().then(function(data) {
        console.log(data)
        debugger
      })
    })
  }
})

export default [login]
