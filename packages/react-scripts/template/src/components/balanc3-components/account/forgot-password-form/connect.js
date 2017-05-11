import { connect } from 'react-redux'
import ForgotPasswordForm from './forgot-password-form'
import { isValidEmail } from '../logic'
import { reduxForm } from 'redux-form'
import { postResetPassword } from './reducers'

const formName = 'forgotPassword'

function mapStateToProps(state, props) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    forgotPassword: () => dispatch(postResetPassword())
  }
}

// function mergeProps(props, { dispatch }) {
//   return {
//   }
// }

const validate = values => {
  const errors = {}
  if (isValidEmail(values.email)) {
    errors.email = 'Entered email is not valid'
  }
  return errors
}

const ReduxForgotPasswordForm = reduxForm({
  form: formName,
  validate: validate
})(ForgotPasswordForm)

export default connect(mapStateToProps, mapDispatchToProps)(ReduxForgotPasswordForm)
