import React from 'react'
import { Button, Form } from 'semantic-ui-react'

export default () => (
  <Form>
    <Form.Field>
      <label>Email</label>
      <input placeholder="Email" />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder="Password" />
    </Form.Field>
    <Button type="submit">Login</Button>
  </Form>
)
