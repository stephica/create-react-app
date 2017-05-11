import React from 'react'
import { bool, func, string } from 'prop-types'
import { Button, Form, Message } from 'semantic-ui-react'
import { Field } from 'redux-form'
import { ReduxFormInput } from '../../../balanc3-components'
import { postResetPassword } from './reducers'

const ResetPasswordForm = props => {
  const { error, invalid, handleSubmit } = props
  return (
    <Form warning onSubmit={handleSubmit(postResetPassword)} error={!!error}>
      <Field label="Password" name="password" placeholder="1 capital, 1 number, 8 characters" component={ReduxFormInput} />
      <Message error content={error} />
      <Button type="submit" disabled={invalid} color="green">Reset Password</Button>
    </Form>
  )
}

ResetPasswordForm.propTypes = {
  handleSubmit: func,
  invalid: bool,
  error: string,
  postResetPassword: func
}

export default ResetPasswordForm
