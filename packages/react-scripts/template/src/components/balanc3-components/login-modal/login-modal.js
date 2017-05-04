import React from 'react'
import { Modal, Button } from 'semantic-ui-react'
import { LoginForm } from '../../balanc3-components'

const ModalModalExample = () => (
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <LoginForm />
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ModalModalExample
