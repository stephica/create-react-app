import { createLogic } from 'redux-logic'
import { $getBySender } from './actions'

const getBySender = createLogic({
  type: $getBySender,
  process({ getState, action }, dispatch, done) {
    console.log('action', action)
  }
})

export default [getBySender]
