import React from 'react'
import { bool, func } from 'prop-types'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'

const _Sidebar = ({ open, hide }) => (
  <Sidebar as={Menu} animation="overlay" width="thin" direction="right" visible={open} icon="labeled" vertical inverted>
    <Menu.Item name="home">
      <Icon name="home" />
      Home
    </Menu.Item>
    <Menu.Item name="gamepad">
      <Icon name="gamepad" />
      Games
    </Menu.Item>
    <Menu.Item name="camera">
      <Icon name="camera" />
      Channels
    </Menu.Item>
    <Menu.Item name="close" onClick={hide}>
      <Icon name="close" />
      Close
    </Menu.Item>
  </Sidebar>
)

_Sidebar.propTypes = {
  open: bool,
  hide: func
}

export default _Sidebar
