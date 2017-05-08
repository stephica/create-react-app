import React from 'react'
import { bool, func } from 'prop-types'
import { Sidebar, Menu, Icon, Dimmer } from 'semantic-ui-react'
import styled from 'styled-components'

const LayeredSidebar = styled(Sidebar)`
  &&&&{
    width: 90%;
    top: ${({ theme }) => theme.topBarHeight}px;
    z-index: ${({ theme }) => theme.sidebarZ};
  }
`
const LayeredDimmer = styled(Dimmer)`
  &&&&{
    opacity: .2;
    margin-top: ${({ theme }) => theme.topBarHeight}px;
    z-index: ${({ theme }) => theme.sidebarDimmerZ};
  }
`

const _Sidebar = ({ open, hide }) => (
  <span>
    <LayeredSidebar as={Menu} animation="overlay" direction="right" visible={open} icon="labeled" vertical inverted>
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
    </LayeredSidebar>
    <LayeredDimmer active={open} onClickOutside={hide} page />
  </span>
)

_Sidebar.propTypes = {
  open: bool,
  hide: func
}

export default _Sidebar
