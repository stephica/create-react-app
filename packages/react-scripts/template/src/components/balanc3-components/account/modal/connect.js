import { connect } from 'react-redux'
import { getModalState, showLoginModal, hideLoginModal } from './reducers'
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
