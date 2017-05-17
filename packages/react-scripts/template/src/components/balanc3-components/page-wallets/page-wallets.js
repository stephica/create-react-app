import React from 'react'
import { Buffer, Fill, Row } from '../../balanc3-components'
import { Header, Divider, Card } from 'semantic-ui-react'
import styled from 'styled-components'

const GroupSummaryItem = styled('div')`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`
const getTotalBalance = addresses => {
  return addresses.map(el => Number(el.balance)).reduce((a, b) => Number(a) + Number(b)).toFixed(5)
}
const getGroupNames = addresses => {
  return addresses.map(el => el.wallet).reduce((a, b) => {
    if (a.indexOf(b) < 0) a.push(b)
    return a
  }, [])
}

const getGroups = addresses => {
  return getGroupNames(addresses).map(name => addresses.filter(adr => adr.wallet === name))
}

const GroupSummary = ({ group }) => {
  return (
    <GroupSummaryItem>
      <div>
        GroupName: {group[0].wallet}
      </div>
      <div>
        {getTotalBalance(group)}
      </div>

    </GroupSummaryItem>
  )
}

const Address = ({ name, address, balance, tokenStandard, tokenName }) => {
  return (
    <Row justifyContent="space-between">
      <span> {name} </span>
      <span> {address} </span>
      <span> {tokenStandard} </span>
      <span> {tokenName} </span>
      <span> {balance} </span>
      <span>
        <div>rename</div>
        <div>remove</div>
      </span>
    </Row>
  )
}

const WalletPage = props => {
  const { wallets } = props
  window.addresses = wallets
  // const groupNames = getGroupNames(wallets)
  const groups = getGroups(wallets)
  return (
    <Buffer>
      <h2>Wallet</h2>
      <Card fluid>
        <Card.Content>
          <div style={{ textAlign: 'center' }}>
            <Header size="large" style={{ margin: 0 }}>{getTotalBalance(wallets)}</Header>
            <p>Overall Balance</p>
          </div>
          <Divider />
          {groups && groups.map(group => <GroupSummary key={group[0].wallet} group={group} />)}
          <div />
        </Card.Content>
      </Card>
      {groups &&
        groups.map(group => (
          <Card fluid key={group[0].wallet}>
            <Card.Content>
              <Fill justifyContent="space-between">
                <span>{`Group Name: ${group[0].wallet}`}</span>
                <span>{`Total: ${getTotalBalance(group)}`}</span>
              </Fill>
              <Divider />
              {group.map(address => <Address {...address} key={address.address} />)}
            </Card.Content>
          </Card>
        ))}
      <p style={{ whiteSpace: 'pre' }}>{JSON.stringify(wallets, null, '\t')}</p>
    </Buffer>
  )
}

WalletPage.propTypes = {}

export default WalletPage
