import React from 'react'
// import { bool, func } from 'prop-types'
import { Modal, Card, Form, Button } from 'semantic-ui-react'
import { ReduxFormInput } from '../../balanc3-components'
import styled from 'styled-components'

const SmallModal = styled(Modal)`
  &&&{
    @media (min-width: ${({ theme }) => theme.small}) {
      width: 400px;
      margin-left: -200px; // only left to not mess with Semantic UI
    }
  }
`

class WalletModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: props.address || '',
      name: props.name || '',
      tokenStandard: 'eth'
    }
  }

  componentWillReceiveProps(props) {
    console.log('props:', props)
    console.log('state:', this.state)
    this.setState({ ...props })
  }

  render() {
    const { active, hide, addAddress, updateAddress } = this.props
    const { address, name } = this.state

    const handleclick = e => {
      e.preventDefault()
      if (this.props._id) {
        updateAddress({
          _id: this.props._id,
          name: this.props.name
        })
      } else {
      }
      addAddress({
        name: this.state.name,
        address: this.state.address
      })
    }
    console.log('address', address)
    return (
      <SmallModal open={active} onClose={hide}>
        <Card fluid>
          <Card.Content>
            <Card.Header>
              Add New Address
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Form>
              <ReduxFormInput
                overheadLabel="New Address"
                input={{
                  value: address,
                  onChange: e => this.setState({ address: e.target.value })
                }}
              />
              <ReduxFormInput
                overheadLabel="Address Name"
                input={{
                  value: name,
                  onChange: e => this.setState({ name: e.target.value })
                }}
              />
              <Button onClick={handleclick}>Save</Button>
            </Form>
          </Card.Content>
        </Card>
      </SmallModal>
    )
  }
}

export default WalletModal
