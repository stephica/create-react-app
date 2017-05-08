import { connect } from 'react-redux'
import { getUser } from '../account/reducers'
import { showSidebar } from '../sidebar/reducers'
import { showLoginModal } from '../account/modal/actions'
import Header from './header'

function mapDispatchToProps(dispatch) {
  return {
    showSidebar: () => {
      dispatch(showSidebar())
    },
    showLoginModal: () => {
      dispatch(showLoginModal())
    }
  }
}

function mapStateToProps(state, props) {
  const user = getUser(state)
  return {
    user: user.email
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
