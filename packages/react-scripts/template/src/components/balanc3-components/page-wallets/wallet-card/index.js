import React from 'react'
import { string, array } from 'prop-types'
import { Divider, Card } from 'semantic-ui-react'
import { Fill, Row } from '../../../balanc3-components'
import { getTotalBalance } from '../logic'
import { showEditWalletModal } from '../../edit-wallet-modal/reducers'
import { dispatch } from '../../../../utils'

const Address = addressInfo => {
  const { name, address, balance, tokenStandard, tokenName } = addressInfo
  const showEditAddressModal = () => dispatch(showEditWalletModal(addressInfo))
  return (
    <Row justifyContent="space-between">
      <span> {name} </span>
      <span> {address} </span>
      <span> {tokenStandard} </span>
      <span> {tokenName} </span>
      <span> {balance} </span>
      <span>
        <div onClick={showEditAddressModal}>edit</div>
      </span>
    </Row>
  )
}
Address.propTypes = {
  name: string,
  address: string,
  balance: string,
  tokenStandard: string,
  tokenName: string
}

const WalletCard = ({ group, address }) => (
  <Card fluid key={group[0].wallet}>
    <Card.Content>
      <Fill justifyContent="space-between">
        <span>{`Group Name: ${group[0].wallet || 'General'}`}</span>
        <span>{`Total: ${getTotalBalance(group)}`}</span>
      </Fill>
      <Divider />
      {group.map(address => <Address {...address} key={address._id} />)}
    </Card.Content>
  </Card>
)

WalletCard.propTypes = {
  group: array,
  address: string
}

export default WalletCard
