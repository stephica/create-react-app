import React, { Component } from 'react'
import ReduxExample from './components/page-redux-example'
import GraphQl from './components/page-graphql'
import { Route, Switch } from 'react-router-dom'
import Home from './components/page-home'
import Header from './components/balanc3-components/header'
import _AccountPage from './components/page-account'
import { LoginModal, Sidebar, TermsPage, WalletModal, EditWalletModal, NewWalletModal } from './components/balanc3-components'

class App extends Component {
  render() {
    return (
      <div>
        <LoginModal />
        <WalletModal />
        <NewWalletModal />
        <EditWalletModal />
        <Sidebar />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/redux" component={ReduxExample} />
          <Route exact path="/graphql" component={GraphQl} />
          <Route path="/account" component={_AccountPage} />
          <Route exact path="/terms" component={TermsPage} />
          <Route component={Home} />
        </Switch>
      </div>
    )
  }
}

export default App
