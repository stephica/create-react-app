import React from 'react'
import { string, func } from 'prop-types'
import { Modal, Menu } from 'semantic-ui-react'
import { LoginForm, SignupForm } from '../../../balanc3-components'
import styled from 'styled-components'

const SmallModal = styled(Modal)`
  &&&{
    @media (min-width: ${({ theme }) => theme.small}) {
      width: 400px;
      margin-left: -200px; // only left to not mess with Semantic UI
    }
  }
`

const LoginModal = ({ activeItem, signup, hide, login }) => (
  <SmallModal open={!!activeItem} onClose={hide}>
    <Modal.Content>
      <Menu pointing secondary>
        <Menu.Item name="Login" active={activeItem === 'login'} onClick={login} />
        <Menu.Item name="Sign Up" active={activeItem === 'signup'} onClick={signup} />
      </Menu>
      {activeItem === 'login' && <LoginForm />}
      {activeItem === 'signup' && <SignupForm />}
    </Modal.Content>
  </SmallModal>
)

LoginModal.propTypes = {
  activeItem: string,
  signup: func,
  hide: func,
  login: func
}

export default LoginModal
