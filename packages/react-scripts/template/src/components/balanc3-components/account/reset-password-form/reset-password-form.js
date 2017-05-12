import React from 'react'
import { bool, func } from 'prop-types'
import { Button, Form } from 'semantic-ui-react'
import { Field } from 'redux-form'
import { ReduxFormInput } from '../../../balanc3-components'
import { postResetPassword } from './reducers'

const ResetPasswordForm = props => {
  const { invalid, handleSubmit } = props
  return (
    <Form warning onSubmit={handleSubmit(postResetPassword)}>
      <Form.Field>Your new password should contain at least 8 characters, 1 uppercase nad 1 lowercase</Form.Field>
      <Field name="password" placeholder="Password" component={ReduxFormInput} />
      <Field name="confirmPassword" placeholder="Confirm Password" component={ReduxFormInput} />
      <Button type="submit" disabled={invalid} color="green">Reset Password</Button>
    </Form>
  )
}

ResetPasswordForm.propTypes = {
  handleSubmit: func,
  invalid: bool,
  postResetPassword: func
}

export default ResetPasswordForm
