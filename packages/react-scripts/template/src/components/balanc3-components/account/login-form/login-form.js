import React from 'react'
import { string, bool } from 'prop-types'
import { Button, Form, Message } from 'semantic-ui-react'
import { dispatch } from '../../../../utils'
import { loginWith } from './reducers'

let email, password

const clickhandler = e => {
  e.preventDefault()
  dispatch(loginWith(email, password))
}

const setEmail = e => {
  email = e.target.value
}
const setPassword = e => {
  password = e.target.value
}

const LoginForm = ({ error, loading }) => (
  <Form error={!!error} loading={loading}>
    <Form.Field>
      <label>Email</label>
      <input placeholder="Email" onChange={setEmail} />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder="Password" onChange={setPassword} />
    </Form.Field>
    <Button onClick={clickhandler}>Login</Button>
    <Message error content={error} />
  </Form>
)

LoginForm.propTypes = {
  error: string,
  loading: bool
}

export default LoginForm
