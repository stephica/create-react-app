import React from 'react'
import { func, object, string } from 'prop-types'
import { Buffer } from '../../balanc3-components'
import { Button } from 'semantic-ui-react'

const AccountPage = ({ dispatchLogin, dispatchLogout, error, submit, user, data: { userAuths } }) => {
  const isUser = !!Object.keys(user).length
  console.log('userAuths:', userAuths)
  if (error) {
    console.log('error handled', error)
  }
  return (
    <Buffer>
      <h2>Account</h2>
      {isUser &&
        <span>
          <p style={{ whiteSpace: 'pre' }}>{JSON.stringify(userAuths, null, '\t')}</p>
          <Button onClick={() => submit()}>Update</Button>
          <Button onClick={dispatchLogout}>Logout</Button>
        </span>}
      {!isUser && <Button onClick={dispatchLogin}>Login</Button>}
    </Buffer>
  )
}

AccountPage.propTypes = {
  user: object,
  data: object,
  dispatchLogin: func,
  submit: func,
  error: string,
  dispatchLogout: func
}

export default AccountPage
