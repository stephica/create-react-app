import { connect } from 'react-redux'
import { getUser, getUserToken } from '../account/reducers'
import { showSidebar, hideSidebar, getSidebarState } from '../sidebar/reducers'
import { showLoginModal } from '../account/modal/reducers'
// import gql from 'graphql-tag'
// import { graphql } from 'react-apollo'
// const localUserToken = localStorage.getItem('userToken')
import Header from './header'

function mapDispatchToProps(dispatch) {
  return {
    showSidebar: () => dispatch(showSidebar()),
    hideSidebar: () => dispatch(hideSidebar()),
    showLoginModal: () => dispatch(showLoginModal())
  }
}

function mapStateToProps(state, props) {
  const user = getUser(state)
  return {
    user: user.email,
    userToken: getUserToken(state),
    sidebarOpen: getSidebarState(state)
  }
}

// const getUserQuery = gql`query ($token: String) { userAuths(token: $token) {_id, name, email, createdDate} }`

// const HeaderWithData = graphql(getUserQuery, {
//   options: props => {
//     console.log('props:', props)
//     return {
//       variables: {
//         token: localUserToken || ''
//       }
//     }
//   }
// })(Header)

export default connect(mapStateToProps, mapDispatchToProps)(Header)
