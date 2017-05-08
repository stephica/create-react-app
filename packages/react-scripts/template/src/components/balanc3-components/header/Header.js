import React from 'react'
import { string, func } from 'prop-types'
import { Link } from 'react-router-dom'
import { dispatch } from '../../../utils'
import styled from 'styled-components'
import { showLoginModal } from '../account/modal/actions'
import Media from 'react-responsive'
import { screenSizes } from '../../base/theme'
import { Icon } from 'semantic-ui-react'

const HeaderSpace = styled('div')`
  height: 60px;
  display: flex;
  width: 100%;
  align-items: center;
`

const HeaderRow = styled(HeaderSpace)`
  background-color: ${props => props.theme.dark};
  position: fixed;
  top: 0;
  padding: 20px;
  justify-content: space-between;
`

const HeaderLink = styled(Link)`
  color: ${props => props.theme.white};
  margin-right: 20px;
`

const Header = ({ user, hide }) => {
  const loginclick = () => dispatch(showLoginModal())
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
                {user && <HeaderLink to="/account">{user}</HeaderLink>}
                {!user && <span style={{ color: 'white', cursor: 'pointer' }} onClick={loginclick}> Login </span>}
              </Media>
              <Media maxWidth={screenSizes.small}>
                <Icon name="content" style={{ color: 'white' }} />
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
  hide: func
}

export default Header
