import people from '../components/page-redux-example/peopleContainer/reducers'
import getBySender from '../components/page-graphql/reducers'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createLogicMiddleware } from 'redux-logic'
import { ApolloClient, ApolloProvider } from 'react-apollo'
import graphqlLogic from '../components/page-graphql/logic'
import personLogic from '../components/page-redux-example/peopleContainer/logic'

const logicMiddleware = createLogicMiddleware([...personLogic, ...graphqlLogic])
const apolloClient = new ApolloClient()

// Allows Redux Devtools
const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

const middleware = applyMiddleware(logicMiddleware)
const enhancer = composeEnhancers(middleware)

const rootReducer = combineReducers({
  people,
  getBySender,
  apollo: apolloClient.reducer()
  // add additional reducers here
})

export default initialState => {
  return createStore(rootReducer, initialState, enhancer)
}
