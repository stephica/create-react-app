import React from 'react'
import { string, func } from 'prop-types'
import { Buffer } from '../../balanc3-components'
import { Button } from 'semantic-ui-react'

const AccountPage = ({ email, id, dispatchLogin }) => {
  return (
    <Buffer>
      <h2>Account</h2>
      {email && <p>email: {email}</p>}
      {id && <p>id: {id}</p>}
      {!email && <Button onClick={dispatchLogin}>Login</Button>}
    </Buffer>
  )
}

AccountPage.propTypes = {
  email: string,
  dispatchLogin: func,
  id: string
}

export default AccountPage
