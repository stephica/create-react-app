import { connect } from 'react-redux'
import { getUser, logout, getUserToken } from '../account/reducers'
import AccountPage from './page-account'
import { gql, graphql } from 'react-apollo'
import { showLoginModal } from '../account/modal/reducers'

function mapDispatchToProps(dispatch) {
  return {
    dispatchLogin: e => {
      e.preventDefault()
      dispatch(showLoginModal())
    },
    dispatchLogout: () => dispatch(logout())
  }
}

function mapStateToProps(state, props) {
  const user = getUser(state)
  return {
    email: user.email,
    id: user.id || user._id,
    user: user
  }
}

// const userMutation = gql`mutation ($data: updateUserAuthsInputType!) { updateUserAuth(data: $data) }`

// const AccountPageWithData = graphql(userMutation, {
//   props: ({ mutate }) => ({
//     submit: props => {
//       console.log('pre mutate call with props:', props)
//       mutate({
//         variables: {
//           data: {
//             token: getUserToken(),
//             name: 'temporary name 2'
//           }
//         }
//       })
//     }
//   })
// })(AccountPage)

const userMutation = gql`
  query ($token: String) {
    userAuths(token: $token) {
      _id, 
      name, 
      email, 
      createdDate, 
      country, 
      fiatCurrency, 
      wallets { 
        _id, 
        nickname, 
        addresses {
          _id,
          nickname
        }
      }, 
      addresses {
         _id, 
         address, 
         nickname 
      } 
    } 
  }
`
const AccountPageWithData = graphql(userMutation, {
  options: {
    variables: {
      token: getUserToken() || ''
    }
  }
})(AccountPage)

export default connect(mapStateToProps, mapDispatchToProps)(AccountPageWithData)
