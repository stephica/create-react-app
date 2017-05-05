import React, { Component } from 'react'
import { Modal, Menu } from 'semantic-ui-react'
import { LoginForm, SignupForm } from '../../balanc3-components'
import styled from 'styled-components'

const SmallModal = styled(Modal)`
  width: 400px !important;
  margin-left: -200px !important;
`

export default class LoginModal extends Component {
  state = { activeItem: null }
  handleItemClick = (e, { label }) => this.setState({ activeItem: label })
  render() {
    const { activeItem, signup, hide, login } = this.props
    console.log('rendered with active:', activeItem)
    return (
      <SmallModal open={!!activeItem} onClose={hide}>
        <Modal.Content>
          <Menu pointing secondary>
            <Menu.Item
              name="Login"
              active={activeItem === 'login'}
              onClick={login}
            />
            <Menu.Item
              name="Sign Up"
              active={activeItem === 'signup'}
              onClick={signup}
            />
          </Menu>
          {activeItem === 'login' && <LoginForm />}
          {activeItem === 'signup' && <SignupForm />}
        </Modal.Content>
      </SmallModal>
    )
  }
}
