import React from 'react'
import { Buffer } from '../../balanc3-components'
import { Button } from 'semantic-ui-react'
import { getGroups } from './logic'
import WalletCard from './wallet-card'
import OverallCard from './overall-card'

const WalletPage = props => {
  console.log('wallet page props:', props)
  const addresses = props.data.userAddresses
  const wallets = props.data.userWallets
  const { showWalletModal, showNewWalletModal } = props
  // const { _wallets } = props
  // const groupNames = getGroupNames(wallets)
  const groups = getGroups(addresses, wallets)
  const hasGroups = groups && !!groups.length
  return (
    <Buffer>
      <Button onClick={showWalletModal} style={{ marginBottom: '20px' }}>Add Address</Button>
      <Button onClick={showNewWalletModal} style={{ marginBottom: '20px' }}>Create Group </Button>
      {hasGroups &&
        <span>
          <OverallCard wallets={wallets} groups={groups} />
          {groups && groups.map((group, i) => <WalletCard key={i} group={group} addresses={addresses} />)}
        </span>}
      wallets:
      <p style={{ whiteSpace: 'pre' }}>{JSON.stringify(wallets, null, '\t')}</p>
      addresses:
      <p style={{ whiteSpace: 'pre' }}>{JSON.stringify(addresses, null, '\t')}</p>
    </Buffer>
  )
}

WalletPage.propTypes = {}

export default WalletPage
