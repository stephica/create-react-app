import React from 'react'
import Buffer from '../balanc3-components/buffer'
import StyledLink from '../balanc3-components/styled_link'

const ListItem = ({ to, label }) => (
  <li>
    <StyledLink to={to}>{label}</StyledLink>
  </li>
)

export default () => (
  <Buffer>
    <h2>Balanc3 Starter</h2>
    <p>
      This repo is meant to be slightly opinionated,
      containing commonly used react tools such as:
    </p>
    <ul>
      {/*<ListItem to="https://github.com/ethjs/ethjs" label="ethjs"/>*/}
      <ListItem to="http://redux.js.org" label="redux" />
      <ListItem to="https://github.com/acdlite/recompose" label="recompose" />
      <ListItem to="https://semantic-ui.com/" label="semantic ui" />
      <ListItem
        to="https://github.com/reacttraining/react-router"
        label="react router"
      />
      <ListItem to="https://styled-components.com/" label="styled-components" />
      <ListItem
        to="https://github.com/jeffbski/redux-logic"
        label="redux-logci"
      />
      <ListItem
        to="https://github.com/apollographql/apollo-client"
        label="graphql & apollo"
      />
    </ul>
  </Buffer>
)
