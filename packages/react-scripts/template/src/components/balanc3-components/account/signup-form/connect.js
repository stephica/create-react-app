import { connect } from 'react-redux'
import { postSignup, getSignupFormError } from './reducers'
import SignupForm from './signup-form'
import { reduxForm, formValueSelector, submit } from 'redux-form'

const formName = 'signup'
const select = formValueSelector(formName)

function mapStateToProps(state, props) {
  console.log('error pre render:', getSignupFormError(state))
  return {
    email: select(state, 'email'),
    password: select(state, 'password'),
    formError: getSignupFormError(state)
  }
}

function mergeProps(props, { dispatch }) {
  const { email, password } = props
  console.log('props in merge', props)
  return {
    submitForm: e => {
      e.preventDefault()
      dispatch(submit(formName))
    },
    postSignup: () => {
      dispatch(postSignup(email, password))
    },
    ...props
  }
}

const validate = values => {
  // const errors = {}
  // if (!values.email) {
  //   errors.email = 'Required'
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address'
  // }
  // return errors
}

const ReduxSignupForm = reduxForm({
  form: formName,
  validate: validate
})(SignupForm)

export default connect(mapStateToProps, null, mergeProps)(ReduxSignupForm)
