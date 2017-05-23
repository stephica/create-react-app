import React from 'react'
import { string, array, object } from 'prop-types'
import { Divider, Card } from 'semantic-ui-react'
import { Fill, Row } from '../../../balanc3-components'
// import { getTotalBalance } from '../logic'
import { graphCall, mutateAddress } from '../../../../queries'
import { dispatch } from '../../../../utils'
import { showWalletModal } from '../../wallet-modal/reducers'

const Address = addressInfo => {
  const { name, address, balance, tokenStandard, tokenName } = addressInfo
  // const showEditAddressModal = () => dispatch(showEditWalletModal(addressInfo))
  const success = () => {
    console.log('success')
  }
  const fail = () => {
    console.log('fail')
  }
  const updateData = {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5MTMyYjkxMWFmMzBmMjE4YTZkY2IyZSIsImlhdCI6MTQ5NTQ2NzM2OSwiZXhwIjoxNDk2MDcyMTY5fQ.OeFsPhFm81rs_vuWj6VGt-QuM6XMFFjB9kBBerqaAsI',
    _id: '591da8dc72e5db323554e366',
    name: 'Nick100'
  }
  const showEditAddressModal = () => graphCall(mutateAddress, updateData, success, fail)
  return (
    <Row justifyContent="space-between">
      <span> {name} </span>
      <span> {address} </span>
      <span> {tokenStandard} </span>
      <span> {tokenName} </span>
      <span> {balance} </span>
      <span>
        <div onClick={showEditAddressModal} style={{ cursor: 'pointer' }}>edit</div>
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

const isMatchingOrBothNull = (a, b) => a === b || (!a && !b)

const WalletCard = ({ wallet, addresses }) => {
  const addNewWalletToGroup = () => dispatch(showWalletModal({ wallet: wallet._id }))
  return (
    <Card fluid key={wallet._id}>
      <Card.Content>
        <Fill justifyContent="space-between">
          <span>{`${wallet.name || 'Ethereum'}`}</span>
          {/* <span>{`Total: ${getTotalBalance()}`}</span> */}
        </Fill>
        <Divider />
        {addresses.map(address => (isMatchingOrBothNull(address.wallet, wallet._id) ? <Address {...address} key={address._id} /> : null))}
        <p onClick={addNewWalletToGroup}> + Add Address</p>
      </Card.Content>
    </Card>
  )
}

WalletCard.propTypes = {
  addresses: array,
  wallet: object,
  address: string
}

export default WalletCard
