import React from 'react'
import { string } from 'prop-types'
import { Link } from 'react-router-dom'
import { dispatch } from '../../../utils'
import styled from 'styled-components'
import { showLoginModal } from '../account/modal/actions'

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

const Header = ({ user }) => {
  const loginclick = () => dispatch(showLoginModal())
  return (
    <div>
      <HeaderSpace />
      <HeaderRow alignItems="center">
        <div>
          <HeaderLink to="/" style={{ margin: '0 60px 0 0' }}> Balanc3 Starter </HeaderLink>
          <HeaderLink to="/redux">Redux</HeaderLink>
          <HeaderLink to="/graphql">GraphQl</HeaderLink>
        </div>
        <div>
          {user && <HeaderLink to="/account">{user}</HeaderLink>}
          {!user && <span style={{ color: 'white', cursor: 'pointer' }} onClick={loginclick}> Login </span>}
        </div>
      </HeaderRow>
    </div>
  )
}

Header.propTypes = {
  user: string
}

export default Header
