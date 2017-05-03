import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from './store/configure-store'
import { ThemeProvider } from 'styled-components'
import theme from './components/base/theme'
import { BrowserRouter as Router } from 'react-router-dom'
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'http://45.55.151.65/graphql'
})
const client = new ApolloClient({ networkInterface: networkInterface })
const store = configureStore()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client} store={store}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById('root')
)
