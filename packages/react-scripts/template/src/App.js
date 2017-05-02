import React, { Component } from 'react'
import baseStyles from './components/base/base-styles'
import ReduxExample from './components/page-redux-example'
import GraphQl from './components/page-graphql'
import { Route } from 'react-router-dom'
import Home from './components/page-home'
import Header from './components/header'

class App extends Component {
  render() {
    baseStyles()
    return (
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/redux" component={ReduxExample} />
        <Route exact path="/graphql" component={GraphQl} />
      </div>
    )
  }
}

export default App
