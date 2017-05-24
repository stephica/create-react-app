import React from 'react'
import { Field } from 'redux-form'
import { func, object, string, bool } from 'prop-types'
import { Buffer, ReduxFormInput, ReduxFormDropdown } from '../../../balanc3-components'
import { Button, Form, Message } from 'semantic-ui-react'
import { countryOptions, currencyOptions } from '../../../base/config'

const UpdateAccountForm = props => {
  const { dispatchLogin, dispatchLogout, error, submitHandler, user, handleSubmit, formSuccess } = props
  const isUser = user && !!Object.keys(user).length
  console.log('isSuccess:', formSuccess)
  const handler = ({ user }) => {
    submitHandler(user)
  }
  if (error) {
    console.log('error handled:', error)
  }
  return (
    <Buffer>
      {isUser &&
        <Form onSubmit={handleSubmit(handler)} style={{ maxWidth: '600px', margin: '0 auto' }} error={error} success={formSuccess}>
          {/* <p style={{ whiteSpace: 'pre' }}>{JSON.stringify(user, null, '\t')}</p> */}
          <Field name="user.name" placeholder="Name" component={ReduxFormInput} overheadLabel="Name" />
          <Field name="user.email" placeholder="Email" component={ReduxFormInput} overheadLabel="Email" />
          <Field name="user.country" overheadLabel="Country" component={ReduxFormDropdown} placeholder="Select Country" options={countryOptions} />
          <Field name="user.fiatCurrency" overheadLabel="Fiat Currency" component={ReduxFormDropdown} placeholder="Currency" options={currencyOptions} />
          <Button>Update</Button>
          <Button onClick={dispatchLogout}>Logout</Button>
          <Message error> There was an error loging you in.  Contact support@balanc3.net if the problem continues</Message>
          <Message success>Account updated successfully</Message>
        </Form>}
      {!isUser && <Button onClick={dispatchLogin}>Login</Button>}
    </Buffer>
  )
}

UpdateAccountForm.propTypes = {
  user: object,
  data: object,
  dispatchLogin: func,
  submitHandler: func,
  handleSubmit: func,
  submit: func,
  error: string,
  formSuccess: bool,
  dispatchLogout: func
}

export default UpdateAccountForm
