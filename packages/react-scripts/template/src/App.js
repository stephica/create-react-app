import React, { Component } from 'react'
import baseStyles from './components/base/base-styles'
import ReduxExample from './components/page-redux-example'
import GraphQl from './components/page-graphql'
import { Route } from 'react-router-dom'
import Home from './components/page-home'
import Header from './components/balanc3-components/header'
import { LoginModal, Sidebar, TermsPage, AccountPage } from './components/balanc3-components'

class App extends Component {
  render() {
    baseStyles()
    return (
      <div>
        <LoginModal />
        <Sidebar />
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/redux" component={ReduxExample} />
        <Route exact path="/graphql" component={GraphQl} />
        <Route path="/account" component={AccountPage} />
        <Route exact path="/terms" component={TermsPage} />
      </div>
    )
  }
}

export default App
