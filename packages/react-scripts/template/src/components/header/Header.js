import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Buffer from '../buffer';

const HeaderRow = styled('div')`
  background-color: ${props => props.theme.dark}
  height: 60px;
  display: flex;
  align-items: center;
`;

const HeaderLink = styled(Link)`
  color: ${props => props.theme.white};
  margin-right: 20px;
`;

const Header = () => {
  return (
    <HeaderRow alignItems="center">
      <Buffer>
        <HeaderLink to="/" style={{ margin: '0 60px 0 0' }}>
          Balanc3 Starter
        </HeaderLink>
        <HeaderLink to="/examples">Examples</HeaderLink>
      </Buffer>
    </HeaderRow>
  );
};

export default Header;
