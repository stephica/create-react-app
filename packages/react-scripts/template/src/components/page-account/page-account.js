import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { UpdateAccountForm as AccountTab, WalletPage as WalletTab } from '../balanc3-components'

export default class AccountPage extends Component {
  state = { activeItem: 'Info' }
  handleItemClick(e, { label }) {
    this.setState({ activeItem: label })
  }
  render() {
    const activeItem = this.state.activeItem
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name="Info" label="Info" active={activeItem === 'Info'} onClick={() => this.setState({ activeItem: 'Info' })} />
          <Menu.Item name="Wallets" label="Wallets" active={activeItem === 'Wallets'} onClick={() => this.setState({ activeItem: 'Wallets' })} />
        </Menu>
        {activeItem === 'Info' && <AccountTab />}
        {activeItem === 'Wallets' && <WalletTab />}
      </div>
    )
  }
}
