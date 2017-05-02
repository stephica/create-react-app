import React from 'react';
import Buffer from '../balanc3-components/buffer';
import StyledLink from '../balanc3-components/styled_link';

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
        <StyledLink to="https://semantic-ui.com/">semantic-ui</StyledLink>
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
  </Buffer>
);
