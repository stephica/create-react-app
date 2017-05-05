import { connect } from 'react-redux'
import { getModalState } from './reducers'
import { showLoginModal, hideLoginModal } from './actions'
import LoginModal from './modal'

function mapStateToProps(state, props) {
  return {
    activeItem: getModalState(state)
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
