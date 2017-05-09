import { connect } from 'react-redux'
import { getError, isLoading } from './reducers'
import LoginForm from './login-form'

function mapStateToProps(state, props) {
  return {
    error: getError(state),
    loading: isLoading(state)
  }
}

export default connect(mapStateToProps, null)(LoginForm)
