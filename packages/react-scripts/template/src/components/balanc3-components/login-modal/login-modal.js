import React, { Component } from 'react'
import { Modal, Button, Menu } from 'semantic-ui-react'
import { LoginForm, SignupForm } from '../../balanc3-components'
import styled from 'styled-components'

const SmallModal = styled(Modal)`
  width: 400px !important;
  margin-left: -200px !important;
`

export default class LoginModal extends Component {
  state = { activeItem: 'login' }
  handleItemClick = (e, { label }) => this.setState({ activeItem: label })
  render() {
    const { activeItem } = this.state
    console.log('activeItem', activeItem)
    return (
      <SmallModal trigger={<Button>Show Modal</Button>}>
        <Modal.Content>
          <Menu pointing secondary>
            <Menu.Item
              name="Login"
              label="login"
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Sign Up"
              label="signup"
              active={activeItem === 'signup'}
              onClick={this.handleItemClick}
            />
          </Menu>
          {activeItem === 'login' && <LoginForm />}
          {activeItem === 'signup' && <SignupForm />}
        </Modal.Content>
      </SmallModal>
    )
  }
}
