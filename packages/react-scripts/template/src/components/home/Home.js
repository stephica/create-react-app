import React from 'react';
import Buffer from '../buffer';
import StyledLink from '../styled_link';
import { Ethereum } from '../ethereumRedux';
import styled from 'styled-components';

const Box = styled('div')`
  padding: 20px;
  max-width: 600px;
  border: 3px solid;
  border-radius: 5px;
  word-wrap: break-word;
`;

const GoodBox = styled(Box)` border-color: ${props => props.theme.primary} `;
const BadBox = styled(Box)` border-color: ${props => props.theme.danger} `;

export default () => (
  <Buffer>
    <h2>Balanc3 Starter</h2>
    <p>
      {' '}
      Here is a link to our <StyledLink to="/redux">redux example</StyledLink>
      {' '}
      .
    </p>
    <p>
      This repo is meant to be slightly opinionated,
      containing commonly used react tools such as:
    </p>
    <ul>
      <li>
        <StyledLink to="https://github.com/ethjs/ethjs">ethjs</StyledLink>
      </li>
      <li><StyledLink to="http://redux.js.org/">redux</StyledLink></li>
      <li>
        <StyledLink to="https://github.com/acdlite/recompose">
          recompose
        </StyledLink>
      </li>
      <li>
        <StyledLink to="http://www.material-ui.com/">material-ui</StyledLink>
      </li>
      <li>
        <StyledLink to="https://github.com/reacttraining/react-router">
          react router
        </StyledLink>
      </li>
      <li>
        <StyledLink to="https://styled-components.com/">
          styled-components
        </StyledLink>
      </li>
      <li>
        <StyledLink to="https://github.com/jeffbski/redux-logic">
          redux-logic
        </StyledLink>
      </li>
    </ul>
    <p>
      Oh yeah, one more thing: This repo is a personal project and is in development.  Some of it is half finished and I make no promises about maintaining.  If you've somehow stumbled upon this and want to reach me, email me at
      {' '}
      <StyledLink to="mailto:johndangerstorey@gmail.com">
        johndangerstorey@gmail.com
      </StyledLink>
    </p>
  </Buffer>
);
