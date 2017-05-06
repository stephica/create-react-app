import React, { Component } from 'react'
import baseStyles from './components/base/base-styles'
import ReduxExample from './components/page-redux-example'
import GraphQl from './components/page-graphql'
import { Route } from 'react-router-dom'
import Home from './components/page-home'
import Header from './components/balanc3-components/header'
import Account from './components/balanc3-components/page-account'
import { LoginModal } from './components/balanc3-components'

class App extends Component {
  render() {
    baseStyles()
    return (
      <div>
        <LoginModal />
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/redux" component={ReduxExample} />
        <Route exact path="/graphql" component={GraphQl} />
        <Route exact path="/account" component={Account} />
      </div>
    )
  }
}

export default App
