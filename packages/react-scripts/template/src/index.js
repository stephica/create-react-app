import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configureStore from './store/configure-store'
import theme from './components/base/theme'
import { ThemeProvider } from 'styled-components'
import { graphqlUrl } from './components/base/config'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'
export const store = configureStore()
import 'whatwg-fetch'
import { init } from './utils'
const networkInterface = createNetworkInterface({ uri: graphqlUrl })
const client = new ApolloClient({ networkInterface: networkInterface })
const AppWithRouterInfo = withRouter(App)

init()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client} store={store}>
      <Router>
        <AppWithRouterInfo />
      </Router>
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById('root')
)
