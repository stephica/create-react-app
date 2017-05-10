import { connect } from 'react-redux'
import { postSignup, getSignupFormError } from './reducers'
import { hideLoginModal } from '../modal/reducers'
import SignupForm from './signup-form'
import { reduxForm, formValueSelector, submit } from 'redux-form'

const formName = 'signup'
const select = formValueSelector(formName)

function mapStateToProps(state, props) {
  return {
    email: select(state, 'email'),
    password: select(state, 'password'),
    formError: getSignupFormError(state)
  }
}

function mergeProps(props, { dispatch }) {
  const { email, password } = props
  return {
    submitForm: e => dispatch(submit(formName)),
    postSignup: () => dispatch(postSignup(email, password)),
    hideLoginModal: () => dispatch(hideLoginModal()),
    ...props
  }
}

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i.test(values.password)) {
    errors.password = 'Password should include 1 capital letter, 1 number, and be a minimum of 8 characters'
  }
  return errors
}

const ReduxSignupForm = reduxForm({
  form: formName,
  validate: validate
})(SignupForm)

export default connect(mapStateToProps, null, mergeProps)(ReduxSignupForm)
