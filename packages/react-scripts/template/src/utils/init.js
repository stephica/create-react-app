import { dispatch } from '../utils'
import baseStyles from '../components/base/base-styles'
import { getUserToken } from '../components/balanc3-components/account/reducers'
import { userReceived, showLoginModal } from '../components/balanc3-components/account/reducers'
import gql from 'graphql-tag'
import { graphqlUrl } from '../components/base/config'

export default () => {
  console.log('called once!')
  // const props = this.props
  // const user = props.data.userAuths
  // const error = props.data.error
  // if (user) dispatch(userReceived(user))
  // if (error) console.log('Handle Error in App.js => Maybe just stop component from rendering...')
  //  "query": "query ($sender: String, $notRecipients: [String]) { getBySenderExcludeRecipients(sender: $sender, notRecipients: $notRecipients) {sender, recipient, tokenStandard, parentTrace} }",
  //   "variables": {
  //       "sender": "0xc7d3e431be6222543364408a94c12c0d089be305",
  //       "notRecipients": ["0xc8ebccc5f5689fa8659d83713341e5ad19349448"]
  //   }

  const query = {
    query: 'query ($token: String) { userAuths(token: $token) {_id, name, email, createdDate} }',
    variables: {
      token: getUserToken() || ''
    }
  }

  //   {
  //     "query": "query ($token: String) { userAuths(token: $token) {_id, name, email, createdDate} }",
  //     "variables": {
  //         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5MTM0NjUyYjM1MGJlMWEwNDM3OGFiNiIsImlhdCI6MTQ5NDQzNTY0NywiZXhwIjoxNDk1MDQwNDQ3fQ.WjNEbbrOqLytYvGKyZ6oLVhcVTVty49HCDaA5QfGWFE"
  //     }
  // }

  // const query = {
  //   'query': 'query ($sender: String) { getBySender(sender: $sender) {sender, recipient, tokenStandard, parentTrace} }',
  //   'variables': {
  //     'sender': '0xc7d3e431be6222543364408a94c12c0d089be305'
  //   }
  // }
  console.log('query:', query)
  // const url = `${graphqlUrl}?query={userAuthstoken:"${getUserToken()}"){_id,name,email,createdDate}}}`
  // fetch(url)

  fetch(graphqlUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(query)
  })
    .then(res => res.json())
    .then(res => console.log('res:', res))
  // const AppWithUser = graphql(getUserQuery, {
  //   options: {
  //     variables: {
  //       token: getUserToken()
  //     }
  //   }
  // })(App)

  const path = window.location.pathname
  if (path.includes('reset')) {
    dispatch(showLoginModal('reset'))
  } else if (path.includes('signup')) {
    dispatch(showLoginModal('signup'))
  } else if (path.includes('login')) {
    dispatch(showLoginModal('login'))
  }
  baseStyles()
}
