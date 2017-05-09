import React from 'react'
import { bool, func, string } from 'prop-types'
import { Button, Checkbox, Form, Message } from 'semantic-ui-react'
import { Field } from 'redux-form'

const SignupForm = ({ handleSubmit, postSignup, formError }) => {
  console.log('render:', formError)
  return (
    <Form warning onSubmit={handleSubmit(postSignup)} error={!!formError}>
      <Form.Field>
        <label>Email</label>
        <Field name="email" placeholder="Email" component="input" />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <Field name="password" placeholder="Password" type="password" component="input" />
      </Form.Field>
      <Message warning content="Passwords must contain 1 letter and 1 capital letter" />
      <Form.Field>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Message error content={formError} />
      <Button type="submit">Sign Up</Button>
    </Form>
  )
}

SignupForm.propTypes = {
  handleSubmit: func,
  pristine: bool,
  formError: string,
  postSignup: func
}

export default SignupForm
