import { connect } from 'react-redux'
import { getActive } from './reducers'
import { showLoginModal, hideLoginModal } from './actions'
import LoginModal from './login-modal'

function mapStateToProps(state, props) {
  return {
    activeItem: getActive(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(showLoginModal('login')),
    signup: () => dispatch(showLoginModal('signup')),
    hide: () => {
      dispatch(hideLoginModal())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)
