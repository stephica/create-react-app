import { connect } from 'react-redux'
import { getUser, logout } from '../account/reducers'
import AccountPage from './page-account'
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
    id: user.id
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)
