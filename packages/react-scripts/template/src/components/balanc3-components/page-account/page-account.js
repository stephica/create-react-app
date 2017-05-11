import React from 'react'
import { func, object, string } from 'prop-types'
import { Buffer } from '../../balanc3-components'
import { Button } from 'semantic-ui-react'

const AccountPage = ({ user, dispatchLogin, dispatchLogout, error }) => {
  const isUser = !!Object.keys(user).length
  if (error) {
    console.log('error handled', error)
  }
  return (
    <Buffer>
      <h2>Account</h2>
      {isUser &&
        <span>
          <p style={{ whiteSpace: 'pre' }}>{JSON.stringify(user, null, '\t')}</p>
          <Button onClick={dispatchLogout}>Logout</Button>
        </span>}
      {!isUser && <Button onClick={dispatchLogin}>Login</Button>}
    </Buffer>
  )
}

AccountPage.propTypes = {
  user: object,
  dispatchLogin: func,
  error: string,
  dispatchLogout: func
}

export default AccountPage
