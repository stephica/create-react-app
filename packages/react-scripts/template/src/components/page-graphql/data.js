import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Component from './graphql'

const getBySenderQuery = gql`query { 
  getBySender(sender: "0xc7d3e431be6222543364408a94c12c0d089be305") {
    sender,
    recipient,
    tokenStandard, 
    parentTrace
  } 
}`

export default graphql(getBySenderQuery)(Component)
