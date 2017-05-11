import React from 'react'
import { bool, func, string } from 'prop-types'
import { Button, Form, Message, Container } from 'semantic-ui-react'
import { Field } from 'redux-form'
import { ReduxFormInput } from '../../../balanc3-components'
import { postResetPassword } from './reducers'

const ForgotPasswordForm = props => {
  const { error, invalid, handleSubmit } = props
  return (
    <Container>
      <p>
        Enter the email address associated with your Balanc3 account.
        We will send you a reset link to easily create a new password :)
      </p>
      <Form warning onSubmit={handleSubmit(postResetPassword)} error={!!error}>
        <Field name="email" placeholder="Email" component={ReduxFormInput} />
        <Message error content={error} />
        <Button type="submit" disabled={invalid} color="green">Reset Password</Button>
      </Form>
    </Container>
  )
}

ForgotPasswordForm.propTypes = {
  handleSubmit: func,
  invalid: bool,
  error: string,
  postResetPassword: func
}

export default ForgotPasswordForm
