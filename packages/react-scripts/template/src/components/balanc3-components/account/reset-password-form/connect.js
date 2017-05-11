import { connect } from 'react-redux'
import ResetPasswordForm from './reset-password-form'
import { isValidPassword } from '../logic'
import { reduxForm } from 'redux-form'
import { postResetPassword } from './reducers'
// import { reduxForm, formValueSelector } from 'redux-form'

const formName = 'resetPassword'
// const select = formValueSelector(formName)

function mapStateToProps(state, props) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    resetPassword: () => dispatch(postResetPassword())
  }
}

// function mergeProps(props, { dispatch }) {
//   return {
//   }
// }

const validate = values => {
  const errors = {}
  if (isValidPassword(values.password)) {
    errors.password = 'Password should include 1 capital letter, 1 number, and be a minimum of 8 characters'
  }
  return errors
}

const ReduxResetPasswordForm = reduxForm({
  form: formName,
  validate: validate
})(ResetPasswordForm)

export default connect(mapStateToProps, mapDispatchToProps)(ReduxResetPasswordForm)
