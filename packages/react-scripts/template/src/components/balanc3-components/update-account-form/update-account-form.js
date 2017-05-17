import React from 'react'
import { Field } from 'redux-form'
import { func, object, string } from 'prop-types'
import { Buffer, ReduxFormInput, ReduxFormDropdown } from '../../balanc3-components'
import { Button, Form } from 'semantic-ui-react'
import { countryOptions, currencyOptions } from '../../base/config'

const AccountPage = props => {
  const { dispatchLogin, dispatchLogout, error, submitHandler, user, handleSubmit } = props
  // const user = props.data.userAuths
  const isUser = user && !!Object.keys(user).length
  const handler = ({ user }) => {
    debugger
    submitHandler(user)
  }
  console.log('Account Rendered for :', user)
  if (error) {
    console.log('error handled:', error)
    // TODO:  Launch error for error
  }
  return (
    <Buffer>
      {isUser &&
        <Form onSubmit={handleSubmit(handler)} style={{ maxWidth: '600px', margin: '0 auto' }}>
          {/* <p style={{ whiteSpace: 'pre' }}>{JSON.stringify(user, null, '\t')}</p> */}
          <Field name="user.name" placeholder="Name" component={ReduxFormInput} overheadLabel="Name" />
          <Field name="user.email" placeholder="Email" component={ReduxFormInput} overheadLabel="Email" />
          <Field name="user.country" overheadLabel="Country" component={ReduxFormDropdown} placeholder="Select Country" options={countryOptions} />
          <Field name="user.fiatCurrency" overheadLabel="Fiat Currency" component={ReduxFormDropdown} placeholder="Fiat Currency" options={currencyOptions} />
          <Button>Update</Button>
          <Button onClick={dispatchLogout}>Logout</Button>
        </Form>}
      {!isUser && <Button onClick={dispatchLogin}>Login</Button>}
    </Buffer>
  )
}

AccountPage.propTypes = {
  user: object,
  data: object,
  dispatchLogin: func,
  submitHandler: func,
  handleSubmit: func,
  submit: func,
  error: string,
  dispatchLogout: func
}

export default AccountPage
