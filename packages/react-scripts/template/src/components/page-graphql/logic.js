import { createLogic } from 'redux-logic'
import { $getBySender } from './actions'

const getBySender = createLogic({
  type: $getBySender,
  process({ getState, action }, dispatch, done) {
    console.log('get by sender action', action)
    var payload = {
      query: 'query ($sender: String) { getBySender(sender: $sender) {sender, recipient, tokenStandard, parentTrace} }',
      variables: {
        sender: '0xc7d3e431be6222543364408a94c12c0d089be305'
      }
    }

    var data = new FormData()
    data.append('json', JSON.stringify(payload))
    fetch('http://45.55.151.65/', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: data
    })
      .then(function(res) {
        return res.json()
      })
      .then(function(data) {
        alert(JSON.stringify(data))
      })
      .catch(err => {
        console.log('err:', err)
      })
  }
})

export default [getBySender]
