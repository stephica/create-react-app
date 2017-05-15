import React from 'react'
import { bool, func, string } from 'prop-types'
import { Button, Form, Message } from 'semantic-ui-react'
import { Field } from 'redux-form'
import { ReduxFormInput } from '../../../balanc3-components'

const ResetPasswordForm = props => {
  const { invalid, handleSubmit, resetPassword, formState, formError, newPassword, hideLoginModal } = props
  return (
    <Form
      warning
      onSubmit={handleSubmit(() => resetPassword(newPassword))}
      loading={formState === 'loading'}
      error={formState === 'error'}
      success={formState === 'success'}
    >
      <Form.Field>Your new password should contain at least 8 characters, 1 uppercase and 1 lowercase</Form.Field>
      <Field name="password" placeholder="Password" component={ReduxFormInput} />
      <Field name="confirmPassword" placeholder="Confirm Password" component={ReduxFormInput} />
      <Button fluid type="submit" disabled={invalid} color="green">Reset Password</Button>
      <Message error>{formError}</Message>
      <Message success>
        Password successfully reset, you are now logged in and ready to use your account. <span onClick={hideLoginModal}>Click here</span> to close modal.
      </Message>
    </Form>
  )
}

ResetPasswordForm.propTypes = {
  handleSubmit: func,
  hideLoginModal: func,
  invalid: bool,
  formError: string,
  newPassword: string,
  formState: string,
  resetPassword: func
}

export default ResetPasswordForm
