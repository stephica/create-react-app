import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Component from './graphql'

const getBySenderQuery = gql`query getBySenderQuery { 
  getBySender(sender: "0xc7d3e431be6222543364408a94c12c0d089be305") {
    sender,
    recipient,
    tokenStandard, 
    parentTrace
  } 
}`

const TrainerQuery = gql`query TrainerQuery {
  Trainer(name: "John D. Storey") {
    name
  }
}`

export default graphql(getBySenderQuery)(Component)
