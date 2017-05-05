import { connect } from 'react-redux'
import { getError, isLoading } from './reducers'
import LoginForm from './login-form'

function mapStateToProps(state, props) {
  return {
    error: getError(state),
    loading: isLoading(state)
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     login: () => dispatch(showLoginModal('login')),
//     signup: () => dispatch(showLoginModal('signup')),
//     hide: () => {
//       dispatch(hideLoginModal())
//     }
//   }
// }

export default connect(mapStateToProps, null)(LoginForm)
