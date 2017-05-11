import React from 'react'
import { string, func, bool } from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Media from 'react-responsive'
import { screenSizes } from '../../base/theme'
import { Icon } from 'semantic-ui-react'

const HeaderSpace = styled('div')`
  height: ${({ theme }) => theme.topBarHeight}px;
  display: flex;
  width: 100%;
  align-items: center;
`

const HeaderRow = styled(HeaderSpace)`
  background-color: ${({ theme }) => theme.primary};
  position: fixed;
  top: 0;
  padding: 20px;
  justify-content: space-between;
`

const HeaderLink = styled(Link)`
  color: ${props => props.theme.white};
  margin-right: 20px;
`

const Header = props => {
  const { user, sidebarOpen, showSidebar, hideSidebar, showLoginModal } = props
  return (
    <div>
      <HeaderSpace />
      <Media minWidth={screenSizes.small}>
        {isSmall => (
          <HeaderRow alignItems="center">
            <div>
              <HeaderLink to="/" style={{ margin: '0 60px 0 0' }}> Balanc3 Starter </HeaderLink>
              {isSmall && <HeaderLink to="/redux">Redux</HeaderLink>}
              {isSmall && <HeaderLink to="/graphql">GraphQl</HeaderLink>}
            </div>
            <div>
              <Media minWidth={screenSizes.small}>
                {user && <HeaderLink style={{ margin: 0 }} to="/account">{user}</HeaderLink>}
                {!user && <span style={{ color: 'white', cursor: 'pointer' }} onClick={showLoginModal}> Login </span>}
              </Media>
              <Media maxWidth={screenSizes.small} onClick={sidebarOpen ? hideSidebar : showSidebar} style={{ cursor: 'pointer' }}>
                <Icon name={sidebarOpen ? 'close' : 'content'} style={{ color: 'white' }} />
                <span style={{ color: 'white' }} onClick={showSidebar}>{sidebarOpen ? 'Close' : 'Menu'}</span>
              </Media>
            </div>
          </HeaderRow>
        )}
      </Media>
    </div>
  )
}

Header.propTypes = {
  user: string,
  sidebarOpen: bool,
  showSidebar: func,
  hideSidebar: func,
  showLoginModal: func
}

export default Header
