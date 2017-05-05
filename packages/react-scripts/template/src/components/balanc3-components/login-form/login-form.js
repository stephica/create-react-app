import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { dispatch } from '../../../utils'
import { loginWith } from './actions'

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

export default () => (
  <Form>
    <Form.Field>
      <label>Email test</label>
      <input placeholder="Email" onChange={setEmail} />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder="Password" onChange={setPassword} />
    </Form.Field>
    <Button onClick={clickhandler}>Login</Button>
  </Form>
)
