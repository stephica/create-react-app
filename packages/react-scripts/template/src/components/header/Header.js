import React from 'react'
import {Link} from 'react-router-dom'
import {dispatch} from '../../utils'
import styled from 'styled-components'
import Buffer from '../balanc3-components/buffer'
import {showLoginModal} from '../balanc3-components/login-modal/actions'

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
`

const HeaderLink = styled(Link)`
  color: ${props => props.theme.white};
  margin-right: 20px;
`

const Header = () => {
  const loginclick = () => dispatch(showLoginModal())
  return (
    <d>
      <HeaderSpace />
      <HeaderRow alignItems="center">
        <HeaderLink to="/" style={{margin: '0 60px 0 0'}}> Balanc3 Starter </HeaderLink>
        <HeaderLink to="/Redux">Redux</HeaderLink>
        <HeaderLink to="/GraphQl">GraphQl</HeaderLink>
        <span style={{color: 'white', cursor: 'pointer'}} onClick={loginclick}> Login </span>
      </HeaderRow>
    </d>
  )
}

export default Header
