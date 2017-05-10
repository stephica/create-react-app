import React from 'react'
import { bool, func, string } from 'prop-types'
import { Button, Form, Message } from 'semantic-ui-react'
import { Field } from 'redux-form'
import { Link } from 'react-router-dom'
import { ReduxFormInput } from '../../../balanc3-components'

const SignupForm = props => {
  const { handleSubmit, postSignup, formError, invalid, hideLoginModal } = props
  return (
    <Form warning onSubmit={handleSubmit(postSignup)} error={!!formError}>
      <Field label="Name" name="name" placeholder="Elliot Alderson" component={ReduxFormInput} />
      <Field label="Email" name="email" placeholder="user@foo.com" component={ReduxFormInput} />
      <Field label="Password" name="password" placeholder="1 capital, 1 number,  8 characters" component={ReduxFormInput} />
      <Form.Field>
        <p>By clicking you agree to our <Link to="/terms" onClick={hideLoginModal}>Terms & Conditions</Link></p>
      </Form.Field>
      <Message error content={formError} />
      <Button type="submit" disabled={invalid} color="green">Sign Up</Button>
    </Form>
  )
}

SignupForm.propTypes = {
  handleSubmit: func,
  hideLoginModal: func,
  pristine: bool,
  invalid: bool,
  formError: string,
  postSignup: func
}

export default SignupForm
