import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configureStore from './store/configure-store'
import { ThemeProvider } from 'styled-components'
import theme from './components/base/theme'
import { graphqlUrl } from './components/base/config'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'
export const store = configureStore()
import 'whatwg-fetch'
const networkInterface = createNetworkInterface({ uri: graphqlUrl })
const client = new ApolloClient({ networkInterface: networkInterface })

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
