import React, { Component } from 'react'
import baseStyles from './components/base/base-styles'
import ReduxExample from './components/page-redux-example'
import GraphQl from './components/page-graphql'
import { Route } from 'react-router-dom'
import Home from './components/page-home'
import Header from './components/balanc3-components/header'
import { LoginModal, Sidebar, TermsPage, AccountPage, ResetPasswordPage } from './components/balanc3-components'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { dispatch } from './utils'
import { userReceived, getUserToken } from './components/balanc3-components/account/reducers'

class App extends Component {
  componentWillReceiveProps(props) {
    const user = props.data.userAuths
    const error = props.data.error
    if (user) dispatch(userReceived(user))
    if (error) console.log('Handle Error in App.js => Maybe just stop component from rendering...')
  }

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
        <Route exact path="/reset/:token" component={ResetPasswordPage} />
      </div>
    )
  }
}

const getUserQuery = gql`query ($token: String) { userAuths(token: $token) {_id, name, email, createdDate} }`
const AppWithUser = graphql(getUserQuery, {
  options: {
    variables: {
      token: getUserToken()
    }
  }
})(App)
export default AppWithUser
